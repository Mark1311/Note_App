import express from 'express'
import authrouter from './routes/auth.js'
import cors from 'cors' 
import connectToMongoDB from './db/db.js'

const app = express()
app.use(cors())
app.use(express.json())
// app.use(cors('/api/auth', authrouter)) not usied with cors
app.use('/api/auth', authrouter)


app.listen(5000, () =>{
    connectToMongoDB();
    console.log("running server")
})
