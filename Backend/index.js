import express from 'express'
import authRouter from './routes/auth.js'
import noteRouter from './routes/note.js'
import cors from 'cors' 
import connectToMongoDB from './db/db.js'


const app = express()
app.use(cors())
app.use(express.json())
// app.use(cors('/api/auth', authRouter)) 
app.use('/api/auth', authRouter)
app.use('/api/note', noteRouter)



app.listen(5000, () =>{
    connectToMongoDB();
    console.log("running server")
})
