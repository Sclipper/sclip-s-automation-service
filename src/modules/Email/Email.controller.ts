import { nodemailerEmail, nodemailerPass } from 'config/authorization'
import { waterEmail } from 'config/emails'
import { Request, Response } from 'express'
import { asyncHandler } from 'middleware'
import nodeMailer from 'nodemailer'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const a = 23

export const orderWater = asyncHandler(async (req: Request, res: Response) => {
  const { amount = 5 } = req.params
  const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: nodemailerEmail,
      pass: nodemailerPass,
    },
  })

  const mailOptions = {
    from: nodemailerEmail,
    to: waterEmail,
    subject: 'Sending Email using Node.js',
    text: `Здравей, 

		Пиша ти от името на Ризика ЕооД 206728473.
		
		Може ли да си поръчам вода за адрес:
		Марин Дринов 7 ет.6 ап 17, 4017 Пловдив България
		
		${amount} галона.
		
		Благодаря :) `,
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      return res.status(500).json({ success: false, data: error })
    }

    try {
      // Add new row
      prisma.waterOrder
        .create({
          data: {
            amount: Number(amount),
          },
        })
        .then(() => {
          return res
            .status(200)
            .json({ success: true, data: 'Mail sent successfully' })
        })
    } catch (err) {
      return res.status(500).json({ success: false, data: err })
    }
  })
})
