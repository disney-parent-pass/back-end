import server from '../../../server'
import request from 'supertest'

describe('GET /', () => {
  it('Returns status code 200 with message "Hello World"', async () => {
    const res = await request(server).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.text).toEqual('Hello World!')
  })
})
