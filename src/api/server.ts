import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import { logger } from './middleware/logger'
import { router as HelloRouter } from './resources/pulse/pulse'
import { router as AuthRouter } from './resources/auth/auth_router'

// A server, to configure
export const server = express()

// Configuration of a server
server.use(cors())
server.use(helmet())
server.use(express.json())

// Middlewares
server.use(logger)

// Define the routes with appropriate routers
server.use('/', HelloRouter)
server.use('/auth', AuthRouter)
