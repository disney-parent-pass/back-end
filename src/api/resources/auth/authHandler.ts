import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import userService from '../../service/user'

import { secret } from '../../../config/secrets'

export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      userService.createUser(req.body)
    } catch (error) {
      res.status(400).send('Check your fields and try again')
    }
  }
)

// TODO:
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).send('Please add all fields to signin')
  }

  res.status(200).send('Login endpoint active, nothing happen db side')
})

/**
 * Helper function to generate the JWT token which is set to expire in
 * one day.
 *
 * @param id: string - The id of the user
 *
 * @param username: string - The username of the current user
 */
const genToken = (id: string, username: string) => {
  const payload = {
    subject: id,
    username: username,
  }

  const options = {
    expiresIn: '1d',
  }

  return jwt.sign(payload, secret.jwtSecret, options)
}
