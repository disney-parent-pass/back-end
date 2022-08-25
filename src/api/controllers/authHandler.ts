import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { secret } from '../config/secrets'

// TODO: Import the users model here

// TODO:
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { username, password } = req.body

    if (!username || !password) {
      res.status(400).send('Please add all fields')
    }

    // Check if user exists

    // IF new user add, otherwise fail

    res.status(200).send('Still need to implement adding to the db')
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
