import Joi from 'joi'
import { TaskType } from 'src/types/task.type'

export const taskValidation = (payload: TaskType) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().allow('', null),
        status: Joi.string().allow('', null),
        dueDate: Joi.string().allow('', null),
        priority: Joi.string().allow('', null),
    })

    return schema.validate(payload)
}