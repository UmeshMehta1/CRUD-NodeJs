import express from 'express'
import connectDB from './db/dbconnect.js';
import web from './routers/web.js'
const app = express()
import {join} from "path"

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)


app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Static Files
app.use('/',express.static(join(process.cwd(), "public")))
 
// set template engine
app.set("view engine","ejs")
// load Routes
app.use("/",web)


app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})