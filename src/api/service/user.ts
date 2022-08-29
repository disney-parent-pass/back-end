import UserDAO from '../dao/user'

class UserService {
  createUser(userDto: any) {
    try {
      const { username, password } = userDto
      if (!username || !password) {
        //res.status(400).send('Please add all fields')
      }

      let exists: boolean = false

      if (exists) {
        //res.status(401).send('An account with that email already exists.')
        throw 'Yo the user exists'
      }
      return UserDAO.createUser(username, password)
    } catch (error) {
      throw error
    }
  }

  loginUser(userDto: any) {}
}

export default new UserService()
