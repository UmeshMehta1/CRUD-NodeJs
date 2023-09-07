import express from 'express'
import connectDB from './db/connectdb.js';
const app = express()
import {updateDocById,updateManyDoc,updateOneDocByName,updateOneDoc,updateOneDocByAge} from './modules/student.js'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/"


connectDB(DATABASE_URL)
// updateDocById("64f80091e96a721758db2479")
// updateOneDoc("fff80091e96a721758db2479")
// updateOneDocByAge(21)  // updateOne lae 1ek choti ma yauta item ko name matra change garna sakxa, ek vanda adi item ko name same hunxa vane suru ko item lai matra change garxa.
// updateOneDocByName("laptop")
// updateManyDoc("laptop")  //updatemany lae jati outa item ko name same hunxa teo sab lai change gardinx
updateManyDoc(101)  //updatemany lae jati outa item ko name same hunxa teo sab lai change gardinx

app.listen(3000, ()=>{
    console.log("server starting at 3000....")
})