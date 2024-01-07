require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export const a = 0
export const authToken = process.env.AUTHORIZATION_TOKEN as string
export const nodemailerEmail = process.env.NODEMAILER_EMAIL as string
export const nodemailerPass = process.env.NODEMAILER_PASS as string

export const gptToken = process.env.CHAT_GPT_AUTH as string
