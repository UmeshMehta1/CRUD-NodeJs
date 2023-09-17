import express from 'express'
import connectDB from './db/connectdb.js';
// import './models/Student.js'
import web from './routes/web.js'
import cors from 'cors'
import {join} from "path"
// import bodyParser from 'body-parser'

const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Static Files
app.use('/',express.static(join(process.cwd(), "public")))
 
// set template engine
app.set("view engine","ejs")
// load Routes
app.use("/",web)



app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})