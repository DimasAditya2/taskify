import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema(
  {
    task_id: {
      type: String,
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    status: {
      type: String,
      enum: ['pending', 'progress', 'completed'],
      default: 'pending'
    },
    dueDate: {
      type: Date
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'low'
    }
  },
  { timestamps: true }
)

export const taskModel = mongoose.model('Task', taskSchema)
