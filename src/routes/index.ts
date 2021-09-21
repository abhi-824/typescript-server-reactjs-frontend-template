import { Request, Response, Router } from 'express'
import userRouter from './User'
const router = Router()

router.use('/room',userRouter)

router.get('/', (req: Request, res: Response) => {
  res.send('hello world')
})
 
export default router
