import { nodemailerEmail, nodemailerPass } from 'config/authorization'
import { waterEmail } from 'config/emails'
import { Request, Response } from 'express'
import { asyncHandler } from 'middleware'
import nodeMailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const a = 23

export const getAllAirdrops = asyncHandler(
  async (req: Request, res: Response) => {
    const airdrops = await prisma.airdrops.findMany()
    return airdrops
  },
)
