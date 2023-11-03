import { Router } from 'express'
import { upload } from './controller'

const route = Router()
route.post('/', upload)

export default route