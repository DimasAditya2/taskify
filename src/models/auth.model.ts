import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    user_id: {
      type: String,
      unique: true
    },
    email: {
      type: String,
      unique: true
    },
    username: {
      type: String,
      default: ''
    },
    password: {
      type: String,
      default: ''
    },
  },
  { timestamps: true }
)

const userModel = mongoose.model('users', userSchema)

export default userModel
