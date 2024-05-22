import express from 'express'
import workerRouter from './routes/worker.routes.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(workerRouter)

export default app
