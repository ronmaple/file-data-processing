import axios from './utils/axios'

describe('task.js', () => {
  // Can add a route or direct import to purge database
  // but sometimes it's nice to use tests as a seeder

  it('should create task on POST /tasks', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    const response = await axios.post('/tasks', params)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Hello')
    expect(response.data.completed).toEqual(false)
  })

  it('should get task by id on GET /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/tasks', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.get(`/tasks/${id}`)
    expect(response.status).toEqual(200)
    expect(response.data._id).toEqual(id)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Hello')
    expect(response.data.completed).toEqual(false)
  })

  it('should update task by id on PUT /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/tasks', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.put(`/tasks/${id}`, { body: 'Changed' })
    expect(response.status).toEqual(200)
    expect(response.data._id).toEqual(id)
    expect(response.data.author).toEqual('ron')
    expect(response.data.body).toEqual('Changed')
    expect(response.data.completed).toEqual(false)
  })

  it('should delete task by id on DELETE /:id', async () => {
    const params = {
      author: 'ron', // todo
      body: 'Hello',
      completed: false,
    }
    let response = await axios.post('/tasks', params)
    expect(response.status).toEqual(201)

    const id = response.data._id
    response = await axios.delete(`/tasks/${id}`)
    expect(response.status).toEqual(204)
  })
})
