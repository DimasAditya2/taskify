import mongoose from 'mongoose'
import { logger } from '../utils/logger'
import config from '../config/environment'

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    statis: { type: String, require: true },
    dueDate: { type: Date, require: true },
    priority: { type: String, required: true }
  },
  { timestamps: true }
)

const Task = mongoose.model('Tasks', taskSchema)

const tasks = [
  {
    title: 'Complete project documentation',
    description: 'Write API docs and set up usage examples',
    status: 'progress',
    dueDate: new Date('2024-09-15'),
    priority: 'high'
  },
  {
    title: 'Fix bug in authentication system',
    description: 'Investigate the bug in login flow and fix it',
    status: 'pending',
    dueDate: new Date('2024-09-10'),
    priority: 'medium'
  },
  {
    title: 'Design landing page',
    description: 'Create wireframes and prototypes for the landing page',
    status: 'completed',
    dueDate: new Date('2024-09-05'),
    priority: 'low'
  }
]

async function seedData() {
  try {
    await mongoose.connect(`${config.db}`)
    logger.info('Connected to MongoDB')

    await Task.deleteMany({})

    await Task.insertMany(tasks)

    logger.info('Success Seeder data')
    mongoose.connection.close()
  } catch (error) {
    console.log(error)
    logger.info('failed seed data:', error)
    mongoose.connection.close()
  }
}

seedData()
