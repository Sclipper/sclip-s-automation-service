import express from 'express'
import bodyParser from 'body-parser'

import cors from 'cors'

import EmailRouter from './src/modules/Email/Email.router'
import AirdropRouter from './src/modules/Airdrop/Airdrop.router'

import { apiKeyAuth, auth, errorHandler } from './src/middleware'

export const app = express()
const PORT = 8010
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // TODO: Update this to fit our cors policy based on the env.

try {
  // app.use('/auth', logger, AuthRouter)
  app.use('/email', auth, EmailRouter)
  app.use('/airdrops', apiKeyAuth, AirdropRouter)
  app.use(errorHandler)
} catch (err) {
  console.log('error', err)
}

export const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sclip's automation service listening on PORT ${PORT}!`)
})
