import { Router } from 'express'
import { deleteTaskById, getAllTasks, postTask, updateTaskById } from '../controllers/task.controller'
import { authentication, authorization } from '../middlewares/auth'

export const TaskRouter: Router = Router()

TaskRouter.get('/', authentication, getAllTasks)
TaskRouter.post('/', authentication, postTask)
TaskRouter.get('/:id', authentication, getAllTasks)
TaskRouter.delete('/:id', authentication, authorization, deleteTaskById)
TaskRouter.put('/:id', authentication, authorization, updateTaskById)
