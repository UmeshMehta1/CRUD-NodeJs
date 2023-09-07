import express from 'express'
import connectDB from './db/connectdb.js';
// import './models/Student.js'
import {createDoc, createMultiDoc} from './models/Student.js';
const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)

//createDoc Save
 createDoc() // jun tarika bata garda pani hunxa.
// createDoc('rahul',26, 21399.2, ['game', 'mang'], true, {value:'hello man'})
createMultiDoc()
app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})