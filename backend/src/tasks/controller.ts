import { Response, Request } from 'express'
import Task from './model'

// TODO: generalize and add to types file?
interface RequestHandler {
  (req: Request, res: Response): Promise<Response | any>
}

export const get: RequestHandler = async (req, res) => {
  const id = req.params.id
  try {
    const task = await Task.findById(id)
    if (!task) {
      return res.status(404).send('Not Found')
    }
    res.send(task)
  } catch (err) {
    // TODO generic error handler
    console.error(err)
    res.status(500).send(err)
  }
}

export const create: RequestHandler = async (req, res) => {
  const body = req.body
  try {
    const task = await Task.create(body)
    res.status(201).send(task)
  } catch (err) {
    // TODO generic error handler
    console.error(err)
    res.send(500)
  }
}

// I don't quite like findOneAndUpdate, but I'll
// keep it as it is since this doesn't need to be
// over-done in this type of repo
export const update: RequestHandler = async (req, res) => {
  const id = req.params.id
  const body = req.body
  try {
    await Task.findOneAndUpdate({ _id: id }, body)
    const task = await Task.findOne({ _id: id })
    res.send(task)
  } catch (err) {
    // TODO generic error handler
    console.error(err)
    res.send(500)
  }
}

export const deleteTask: RequestHandler = async (req, res) => {
  const id = req.params.id
  try {
    await Task.findOneAndRemove({ _id: id })
    res.status(204).send()
  } catch (err) {
    // TODO generic error handler
    console.error(err)
    res.send(500)
  }
}
