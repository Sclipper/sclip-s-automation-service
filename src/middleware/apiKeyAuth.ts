import { NextFunction, Request, Response } from 'express'
import { gptToken } from 'config/authorization'
import asyncHandler from './asyncHandler'

const apiKeyAuth = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
      res.status(401)
      res.json({
        message: 'Token not found',
      })
    }

    if (req.headers.authorization?.includes(gptToken)) {
      next()
      return
    }
    res.status(401)
    res.json({
      message: 'Invalid token',
    })
  },
)

export default apiKeyAuth
