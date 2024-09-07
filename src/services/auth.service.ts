import { logger } from '../utils/logger'
import userModel from '../models/auth.model'
import UserType from '../types/auth.type'

export const registerUser = async (payload: UserType) => {
  try {
    return await userModel.create(payload)
  } catch (error: any) {
    if (error.code === 11000) {
      logger.info('Error: 409 Conflict - Duplicate Key:', error)
      throw new Error('Email already exists')
    } else {
      logger.info('Error service register', error)
      throw error
    }
  }
}

export const findUserByEmail = async (email: string) => {
  try {
    return await userModel.findOne({ email })
  } catch (error) {
    console.log(error)
    logger.info('Error service login', error)
    throw error
  }
}
