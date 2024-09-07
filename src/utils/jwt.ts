import jwt from 'jsonwebtoken'
import CONFIG from '../config/environment'
export const signToken = (payload: object, options?: jwt.SignOptions | undefined) => {
  return jwt.sign(payload, CONFIG.JWT_PRIVATE, {
    ...(options && options),
    algorithm: 'RS256'
  })
}

export const verifyToken = (token: string) => {
  try {
    const decoded: any = jwt.verify(token, CONFIG.JWT_PUBLIC)

    return {
      valid: true,
      expired: false,
      decoded
    }
  } catch (error: any) {
    return {
      valid: false,
      expired: error.message === 'jwt is expired or not eligible to use',
      decoded: null
    }
  }
}
