import Express from 'express'
import cors from 'cors'
import apiRouter from './routes'

export const app = Express()

app.use(cors())
app.use(Express.json())
app.use('/api', apiRouter)
export default app
