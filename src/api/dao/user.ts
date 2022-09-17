import DbAccess from '../../config/dbAccessFiles/users-model'
import bcrypt from 'bcryptjs'

const CREATED: number = 201
const SERVER_ERROR: number = 500

class UserDAO {
  async createUser(username: string, password: string, roleId: number) {
    DbAccess.createUser({
      username,
      password: bcrypt.hashSync(password),
      role_id: roleId,
    })
      .then((data) => {
        if (data) {
          return {
            status: CREATED,
            user: { username: data.username, userId: data.userId },
          }
        }
      })
      .catch((err) => {
        console.error(err)
        return { status: SERVER_ERROR, message: 'Database unable to create the user' }
      })
  }

  async retrieveUser(username: string) {
    return await DbAccess.findBy({ username }).first()
  }
}

export default new UserDAO()
