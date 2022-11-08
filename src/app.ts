import express, { Request, Response } from 'express'
import routes from './routes'

const app = express()

app.use(express.json())

routes(app)

app.listen(5000, () => {
    console.log('app listening')
})