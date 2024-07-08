import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'

const app: Application = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', router)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working successfully')
})

export default app
