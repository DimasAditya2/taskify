import { Request, Response } from 'express'
import { getTasks, getTaskById, createTask, deleteTask, updateTask } from '../services/task.service'
import { logger } from '../utils/logger'
import { taskValidation, updateTaskValidation } from '../validation/task.validation'
import { v4 as uuidv4 } from 'uuid'

export const getAllTasks = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const userId = res.locals.user._doc.user_id

    if (id) {
      const task = await getTaskById(id)

      if (!task) {
        return res.status(404).send({
          status: false,
          statusCode: 404,
          message: `Task With ID ${id} Not Found`
        })
      }

      return res.status(200).json({
        status: true,
        statusCode: 200,
        message: 'SUCCESS GET TASK BY ID',
        data: task
      })
    }

    const tasks = await getTasks(userId)

    return res.status(200).json({
      status: true,
      statusCode: 200,
      message: 'SUCCESS GET ALL DATA',
      data: tasks
    })
  } catch (error) {
    logger.error('Failed to get tasks', error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'INTERNAL SERVER ERROR'
    })
  }
}

export const postTask = async (req: Request, res: Response) => {
  try {
    req.body.task_id = uuidv4()
    const { error, value } = taskValidation(req.body)

    if (error) {
      logger.info('Unprocessable Entity:', error.details[0].message)
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: error.details[0].message
      })
    }

    await createTask(value)
    return res.status(201).json({ status: true, statusCode: 201, message: 'SUCCESS CREATE TASKS' })
  } catch (error) {
    logger.error('Failed to add task', error)
    console.log(error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'INTERNAL SERVER ERROR'
    })
  }
}

export const deleteTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const result = await deleteTask(id)

    if (!result)
      return res.status(404).send({ status: false, statusCode: 404, message: `Task With ID ${id} Not Found` })

    return res.status(201).json({ status: true, statusCode: 200, message: 'SUCCESS DELETE TASKS' })
  } catch (error) {
    logger.error('Failed to add task', error)
    console.log(error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'INTERNAL SERVER ERROR'
    })
  }
}

export const updateTaskById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { error, value } = updateTaskValidation(req.body)

    if (error) {
      logger.info('Unprocessable Entity:', error.details[0].message)
      return res.status(422).json({
        status: false,
        statusCode: 422,
        message: error.details[0].message
      })
    }

    const result = await updateTask(id, value)

    if (!result)
      return res.status(404).send({ status: false, statusCode: 404, message: `Task With ID ${id} Not Found` })

    return res.status(200).json({ status: true, statusCode: 200, message: 'SUCCESS UPDATE DATA' })
  } catch (error) {
    logger.error('Failed to update task', error)
    console.log(error)
    return res.status(500).send({
      status: false,
      statusCode: 500,
      message: 'INTERNAL SERVER ERROR'
    })
  }
}
