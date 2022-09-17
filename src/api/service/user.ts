import UserDAO from '../dao/user'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { secret } from '../../config/secrets'

const SERVER_ERROR: number = 500
const BAD_REQUEST: number = 400
const CREATED: number = 201

interface UserServiceResponse {
  status: number,
  message: object | string
}


class UserService {
  async createUser(userDto: any): Promise<UserServiceResponse> {
    try {
      const { username, password, roleId } = userDto
      if (!username || !password || !roleId) {
        throw 'Please enter all fields'
      }

      let exists = UserDAO.retrieveUser(username)

      if(exists) {
        return {
          status: BAD_REQUEST,
          message: "Account with that username already exists. Please signin"
        }
      }

      let id = UserDAO.createUser(username, password, roleId)

      return {
        message: id,
        status: 200
      }
    } catch (error) {
      throw error
    }
  }

  async loginUser(userDto: any): Promise<UserServiceResponse> {
    try {
      const { username, password } = userDto

      if (!username || !password) {
        return {
          status: 401,
          message: 'Missing username or password',
        }
      }

      let user = UserDAO.retrieveUser(username)
        .then((user) => {
          console.log(password, user.password)
          if (user && bcrypt.compareSync(password, user.password)) {
            const jwt = genToken(user)
            return {
              status: 200,
              message: {
                userId: user.id,
                username: user.username,
                token: jwt,
              },
            }
          } else {
            return {
              status: 401,
              message: 'Failed to provide proper credentials',
            }
          }
        })
        .catch((err) => {
          console.error(err)
          throw err
        })
      return user
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()

/**
 * Helper function to generate the JWT token which is set to expire in
 * one day.
 *
 * @param user: object - The user with respective fields
 *
 */
 const genToken = (user) => {
  const { id, username } = user
  const payload = {
    subject: id,
    username: username,
  }

  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secret.jwtSecret, options)
}