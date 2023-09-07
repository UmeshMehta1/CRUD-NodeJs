import express from 'express'
import connectDB from './db/connectdb.js';
import {getAllDoc,logDoc,getCompDoc,getMixDoc,getSortDoc,getDocCount,getSkipDoc,getLimiteDoc,getDocByField,getDocByFieldSpecificField, getAllDocSpecificField, getSingleSpecificField} from './modules/student.js'
const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)
// getAllDoc()
// getAllDocSpecificField()
// getSingleSpecificField()
// getDocByField()
// getDocByFieldSpecificField()
// getLimiteDoc()
// getSkipDoc()
// getDocCount()
// getSortDoc()
// getMixDoc()
// getCompDoc()
logDoc()

app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})