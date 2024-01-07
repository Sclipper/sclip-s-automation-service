import { Router } from 'express'
import { getAllAirdrops } from './Airdrop.controller'

const router = Router()

router.route('/hot-airdrops').get(getAllAirdrops)

// .put(passwordUpdate)

export default router
