import { Router } from "express";
import { getAllTasks, postTask } from "../controllers/task.controller";

export const TaskRouter : Router = Router()

TaskRouter.get('/', getAllTasks)
TaskRouter.get('/:id', getAllTasks)
TaskRouter.post('/', postTask)