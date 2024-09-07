import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'
import { logger } from '../utils/logger'

const deserializedToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '')

  if (!accessToken) {
    logger.info('No Access Token')
    return next()
  }

  const token: any = verifyToken(accessToken)
  if (token.decoded) {
    logger.info('Have Token')
    res.locals.user = token.decoded
    return next()
  }

  if (token.expired) {
    logger.info('Token Expired')
    return next()
  }

  logger.info('next')
  return next()
}

export default deserializedToken
