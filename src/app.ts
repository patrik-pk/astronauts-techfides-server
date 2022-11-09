import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import routes from './routes'

import connectDb from './db'

dotenv.config()

connectDb()

const app = express()

app.use(express.json())
app.use(cors())

routes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
