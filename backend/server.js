import 'dotenv/config'
import express from "express"
import flightRoutes from "./Routes/flightRoute.js"
import cors from "cors"
import connectDatabase from './database.js'

connectDatabase()
const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 8000

app.get('/',(req,res)=>{
  res.status(200).send("Hello World!");
  return
})

app.use('/flight',flightRoutes)

app.listen(PORT,()=>{
    console.log(`App is listening at http://localhost:${PORT}`)
})