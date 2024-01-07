require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

export const a = 0

export const waterEmail = process.env.WATER_EMAIL as string
