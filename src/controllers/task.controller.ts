import { Request, Response } from 'express'
// import { taskValidation } from '../validation/task.validation'
import { getTasks } from '../services/task.service'
import { logger } from '../utils/logger'

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const prodcuts = await getTasks()
    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'SUCCESS GET ALL DATA',
      data: prodcuts
    })
  } catch (error) {
    logger.info('Failed to get prodcuts')
    console.log(error)
  }
}
