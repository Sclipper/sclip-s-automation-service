import { Router } from 'express'
import { orderWater } from './Email.controller'

const router = Router()

router.route('/order_water/:amount').get(orderWater) // The old way

// .put(passwordUpdate)

export default router
