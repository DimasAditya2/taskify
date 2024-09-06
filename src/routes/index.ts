import { Application, Router } from 'express'
import dotenv from 'dotenv'
import { TaskRouter } from './task.route'
dotenv.config()

const _routes: Array<[string, Router]> = [['/tasks', TaskRouter]]

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route
    app.use(url, router)
  })
}

