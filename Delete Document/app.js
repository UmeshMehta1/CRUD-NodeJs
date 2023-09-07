import express from 'express'
import connectDB from './db/connectdb.js';
const app = express()
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"
import {deleteDocById,deleteOneDoc,deleteOneDocByAge,deleteManyDoc} from './modules/student.js'

connectDB(DATABASE_URL)

// deleteDocById("64f80091e96a721758db2479")
// deleteOneDoc("64f8016225b12823f12c72fc")
// deleteOneDocByAge(80)
deleteManyDoc(25)

app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})