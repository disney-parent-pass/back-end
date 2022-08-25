import { NextFunction, Request, Response } from 'express'

// Cite: https://github.com/bw-ft-Dev-Libs/Backend/blob/998b02661f84eaeb11ef6619434671a5de5afc0c/api/server.js#L28
//
//  The function is rewritten to follow TS typings
export function logger(req: Request, _res: Response, next: NextFunction) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from 
                ${req.get('origin')} 
                req body ${req.body} request headers ${req.headers} `,
    { ...req.headers }
  )

  next()
}
