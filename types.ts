import { Express } from '@sentry/node/types/tracing/integrations'

export interface Request extends Express.Request {
  auth: {
    id: number
    role: string
    customer_id: number
    type?: 'root' | 'ed'
    startTime: [number, number]
  }
}
