import mongoose from 'mongoose'
import { taskModel } from '../models/task.model'
import { logger } from '../utils/logger'

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
    await mongoose.connect(
      'mongodb+srv://dimasdev:qRkvcH1fIywkHAAc@cluster0.qcura.mongodb.net/taskify?retryWrites=true&w=majority&appName=Cluster0'
    )
    logger.info('Connected to MongoDB')

    await taskModel.deleteMany({})

    await taskModel.insertMany(tasks)

    logger.info('Success Seeder data')
    mongoose.connection.close()
  } catch (error) {
    console.log(error)
    logger.info('failed seed data:', error)
  }
}

seedData()
