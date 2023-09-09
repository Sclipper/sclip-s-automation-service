import { NextFunction, Request, Response } from 'express'
import { authToken } from 'config/authorization'
import asyncHandler from './asyncHandler'

const auth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
      res.status(401)
      res.json({
        message: 'Token not found',
      })
    }
    const token = req.headers.authorization?.split(' ')[1] as string
    if (token === authToken) {
      next()
      return
    }
    res.status(401)
    res.json({
      message: 'Invalid token',
    })
  },
)

export default auth
