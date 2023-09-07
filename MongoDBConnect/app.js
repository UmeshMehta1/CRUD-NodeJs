import express from 'express'
import connectDB from './db/connectdb.js';
import './models/Student.js'
const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)


app.listen(4000, ()=>{
    console.log("server starting at 4000....")
})