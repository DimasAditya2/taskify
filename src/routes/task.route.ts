import { Router } from "express";
import { deleteTaskById, getAllTasks, postTask } from "../controllers/task.controller";

export const TaskRouter : Router = Router()

TaskRouter.get('/', getAllTasks)
TaskRouter.post('/', postTask)
TaskRouter.get('/:id', getAllTasks)
TaskRouter.delete('/:id', deleteTaskById)