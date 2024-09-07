import { Request, Response } from "express";
import { logger } from "../utils/logger";
import { loginUserValidation, registerValidation } from "../validation/auth.validation";
import { registerUser, findUserByEmail } from "../services/auth.service";
import { v4 as uuidv4 } from 'uuid'
import { checkPassword, hashPassword } from "../utils/hashing";
import { signToken } from "../utils/jwt";
// import UserType from "../types/auth.type";


export const createUser = async (req: Request, res: Response) => {
    try {
        req.body.user_id = uuidv4()

        const {error, value} = registerValidation(req.body)
        if (error) {
            logger.info('Error: 422 Unprocessable Entity')
            return res.status(422).send({
                status: false,
                statusCode: 422,
                message: error.details[0].message
            })
        }

        value.password = `${hashPassword(value.password)}`

        await registerUser(value)
        
        return res.status(201).json({
            status: true,
            statusCode: 201,
            message: 'Success Register User'
        })

    } catch (error) {
        logger.info('Error register user:', error)
        console.log(error)
        return res.status(500).send({
            status: false,
            statusCode: 500,
            message: 'Internal Server error'
        })
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const {error, value} = loginUserValidation(req.body)

        if (error) {
            logger.info('Error: 422 Unprocessable Entity')
            return res.status(422).send({
                status: false,
                statusCode: 422,
                message: error.details[0].message
            })
        }

        const user  = await findUserByEmail(value.email)

        if(!user) return res.status(404).send({status: false, statusCode: 404, message: 'User Not Found'})

        const isValidPassword = checkPassword(value.password, user.password)

        if(!isValidPassword) return res.status(401).send({status: false, statusCode: 401, message: 'Invalid email/password'})

        const access_token = signToken({...user}, {expiresIn: '1h'})

        res.status(200).json({status: true, statusCode: 200, message: 'Succes Login', access_token})

    } catch (error) {
        logger.info('Error Login', error)
        console.log(error)
    }
}