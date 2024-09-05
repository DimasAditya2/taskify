import mongoose from 'mongoose'
import config from '../config/environment'
import { logger } from './logger'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('CONNECTED TO DATABASE')
  })
  .catch((error) => {
    logger.info('ERROR CONNECT TO DATABASE')
    logger.info(error)
    process.exit(1)
  })
