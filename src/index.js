import app from './app.js'
import { connectDB, uploadDataBase } from './db.js'

const { PORT } = process.env
const URLJSON = 'TSP_UserCerts.json'

connectDB()
uploadDataBase(URLJSON)
app.listen(PORT)
