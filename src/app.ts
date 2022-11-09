import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import routes from './routes'

import connectDb from './db'

connectDb()

const app = express()

app.use(express.json())
app.use(cors())

routes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})

// Allow CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Credentials', 'true')
//   res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, x-auth-token'
//   )
//   next()
// })
