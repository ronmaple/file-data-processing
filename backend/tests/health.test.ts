import axios from './utils/axios'

describe('health.js', () => {
  it('should return OK when GET /health', async () => {
    const response = await axios.get('/health')
    expect(response.data).toEqual('OK');
  })
})