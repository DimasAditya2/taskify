import { Request, Response } from 'express'
import './utils/connectDB'
import { logger } from './utils/logger'
import createServer from './utils/server'

const app = createServer()
const PORT = process.env.PORT || 3000

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World !!!')
})

app.listen(PORT, () => {
  logger.info(`Server is running on http://localhost:${PORT}`)
})
