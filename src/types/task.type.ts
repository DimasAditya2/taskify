export interface TaskType {
  title: string
  description: string
  status: 'pending' | 'progress' | 'completed'
  dueDate: Date
  priority: 'low' | 'medium' | 'high'
}
