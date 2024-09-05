import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { routes } from './routes'
import './utils/connectDB'
import { logger } from './utils/logger'

const app: Application = express()
const PORT = process.env.PORT || 3000

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World !!!')
})

// Parse body request
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// CORS access handler
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', '*')
  next()
})

routes(app)

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`)
})
