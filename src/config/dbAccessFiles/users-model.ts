//const db = require('../dbConfig')
import { db } from '../dbConfig'

class DbAccess {
  public async createUser(userObj) {
    const [id] = await db('users').insert(userObj).returning('id')
    return id
  }

  public findBy(filter) {
    return db('users').where(filter)
  }

  public findById(id) {
    return db('users').select('username', 'id').where({ id }).first()
  }
}

export default new DbAccess()
