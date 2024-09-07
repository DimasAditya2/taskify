import Joi from 'joi'
import { TaskType } from 'src/types/task.type'

export const taskValidation = (payload: TaskType) => {
  const schema = Joi.object({
    user_id: Joi.string().required(),
    task_id: Joi.string().required(),
    title: Joi.string().required(),
    description: Joi.string().allow('', null),
    status: Joi.string().allow('', null),
    dueDate: Joi.string().allow('', null),
    priority: Joi.string().allow('', null)
  })

  return schema.validate(payload)
}

export const updateTaskValidation = (payload: TaskType) => {
  const schema = Joi.object({
    task_id: Joi.string(),
    title: Joi.string().required(),
    description: Joi.string().allow('', null),
    status: Joi.string().allow('', null),
    dueDate: Joi.string().allow('', null),
    priority: Joi.string().allow('', null)
  })

  return schema.validate(payload)
}
