import { Router } from "express";
import { getAllTasks } from "../controllers/task.controller";

export const TaskRouter : Router = Router()

TaskRouter.get('/tasks', getAllTasks)