import Joi from 'joi'
import UserType from '../types/auth.type'

export const registerValidation = (payload: UserType) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    email: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
  })

  return schema.validate(payload)
}

export const loginUserValidation = (payload: UserType) => {
  const schema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required()
  })

  return schema.validate(payload)
}
