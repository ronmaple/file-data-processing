import mongoose, { Schema } from 'mongoose'

const taskSchema = new Schema({
  author: String,
  body: String,
  date: {
    type: Date,
    default: Date.now
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', taskSchema)

export default Task