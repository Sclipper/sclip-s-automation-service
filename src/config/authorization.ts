require('dotenv').config({
  path: '.env',
})

export const a = 0
export const authToken = process.env.AUTHORIZATION_TOKEN as string
export const nodemailerEmail = process.env.NODEMAILER_EMAIL as string
export const nodemailerPass = process.env.NODEMAILER_PASS as string
