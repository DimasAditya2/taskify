import { TaskType } from 'src/types/task.type'
import { taskModel } from '../models/task.model'
import { logger } from '../utils/logger'

export const getTasks = async (user_id: string) => {
  try {
    const data = await taskModel.find({user_id})
    return data
  } catch (error) {
    logger.info('Error cannot get all data', error)
    return null
  }
}

export const getTaskById = async (id: string, user_id: string) => {
  try {
    const data = await taskModel.findOne({_id: id, user_id})
    return data
  } catch (error) {
    logger.info('Error cannot get data by id', error)
    throw error
  }
}

export const createTask = async (payload: TaskType) => {
  try {
    const data = await taskModel.create(payload)
    return data
  } catch (error) {
    logger.info('Error Create Task', error)
    throw error
  }
}

export const deleteTask = async (task_id: string | number) => {
  try {
    const data = await taskModel.findOneAndDelete({ task_id: String(task_id) })
    return data
  } catch (error) {
    logger.info('Error Create Task', error)
    throw error
  }
}


export const updateTask = async (task_id: string | number, payload: TaskType) => {
  try {
    const data = await taskModel.findOneAndUpdate({task_id}, {
      $set: payload
    })
    return data
  } catch (error) {
    logger.info('Error Create Task', error)
    throw error
  }
}