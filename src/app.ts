import express from 'express'
import routes from './routes'

import connectDb from './db'

connectDb()

const app = express()

app.use(express.json())

routes(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
