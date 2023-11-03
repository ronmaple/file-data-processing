import express from 'express'
import mongoose from 'mongoose'
import healthRoute from './health/routes'
import tasksRoute from './tasks/routes'
import uploadRoute from './upload/routes'
import multer from 'multer'
import cors from 'cors'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/data/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const app = express()
const port = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', healthRoute)
app.use('/tasks', tasksRoute)
app.use('/upload', upload.single('document_file'), uploadRoute)

// TODO: winston or another logger
const server = async () => {
  try {
    await mongoose.connect('mongodb://root:example@127.0.0.1:27017')
    console.log(
      `📄 MongoDB connected on: ${
        process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
      }`
    )
  } catch (err) {
    console.error('MongoDB connection failed')
    console.error(err)
    throw err
  }

  app.listen(port, () => {
    console.log(`🚀 Data-Extract backend running on port:: ${port}`)
  })
}

export { server }