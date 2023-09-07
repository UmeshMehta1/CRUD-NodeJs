import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{type:String, require:true, trim:true},
    age:{type:Number, require:true, min:18, max:50},
    feese:{type:mongoose.Decimal128, required:true, validate: v=> v >=5500.50 },
    hobbies:{type:Array},
    isactive:{type:Boolean},
    comments:[{value:{type:String}, publish:{type:Date, default:Date.now}}],
    join: { type:Date, default: Date.now}

})

// console.log(studentSchema.path('age'))  // ==> check garna ko ligi yasto garnu parxa

//compailing schema
const studentModel = mongoose.model('student', studentSchema)


//Retrive All data=================================
 const getAllDoc = async ()=>{
     const result = await studentModel.find()
     console.log(result)
//     result.forEach((item)=> console.log(
//         item.name,
//         item.age,
//         item.feese.toString(),
//         item.hobbies[0],
//         item.hobbies[1],
//         item.isactive,
//         // item.comments[0].value,
//         // item.comments[0].value,
//         // item.comments[1].publish,
//         item.join
//     ))
 }

// Retrieve All Document with Specific Fields

const getAllDocSpecificField =async () =>{
     const result = await studentModel.find().select('name age') // include ==> // simple way bata garda pani same result aauxa
    // const result = await studentModel.find().select(['name','age']) // include ==> // Array method bata garda pani same result aauxa
    // const result = await studentModel.find().select({name:1, age:1})   // include ==> // object method bata garda pani same result aauxa
    // console.log(result)

// Exclude garda minus(-) lage ko bahek sabe show garxa...
    // const result = await studentModel.find().select('-name -age') // Exclude ==> // simple way bata garda pani same result aauxa
    //  const result = await studentModel.find().select(['-name','-age']) // Exclude ==> // Array method bata garda pani same result aauxa
    // const result = await studentModel.find().select({name:0, age:0})   // Exclude ==> // object method bata garda pani same result aauxa
    // console.log(result)

    // include ko aarko method == same result aauxa===========
    // const result = await studentModel.find({}, 'name age')

    // console.log(result)
}
// Retrieve Single Document with specific field
const getSingleSpecificField = async()=>{
    const result = await studentModel.findById("64f80ff37ddc4fc7bfbf31eb",'name');
    // console.log(result);
}

// Retrive Document by Field

const getDocByField = async()=>{
    // const result = await studentModel.find({name:'rahul'})
    const result = await studentModel.find({age:20})
    // console.log(result)
}

// Retrive Document by Field wht specific field
const getDocByFieldSpecificField = async()=>{
    const result = await studentModel.find({age:20}).select('name age')
    // console.log(result)
}

// Retrive Limited Document 
const getLimiteDoc = async()=>{
    // const result = await studentModel.find().limit(4)  
    const result = await studentModel.find({}, null, {limit:4})  // same like above
    // console.log(result)
}

// Retrive Skip Document 
const getSkipDoc = async()=>{
    // const result = await studentModel.find().skip(13)
    const result = await studentModel.find({}, null, {skip:4})  // same like above
    // console.log(result)
}

// Count Document 
const getDocCount = async()=>{
    const result = await studentModel.find().countDocuments()
    // const result = await studentModel.find({}, null, {skip:4})  // same like above
    // console.log(result)
}

// Sort Document 
const getSortDoc = async()=>{
    // const result = await studentModel.find().sort({age:1}) // Assending order
    // const result = await studentModel.find().sort({age:-1}) // Desending order
    // const result = await studentModel.find().sort({name:1}) // A to Z
    const result = await studentModel.find().sort({name:-1}) // Z to A
    // const result = await studentModel.find({}, null, {skip:4})  // same like above
    // console.log(result)
}

// mix Document 
const getMixDoc = async()=>{
    const result = await studentModel.find({}, {name:1,age:1}, {limit:3, skip:2})
    // const result = await studentModel.find({}, null, {skip:4})  // same like above
    console.log(result)
}

// Comparisin Query Operation 
const getCompDoc = async()=>{
    // const result = await studentModel.find({age:{$gt:24}}) //$gt==> greter then 20 wala mata show garxa
    // const result = await studentModel.find({age:{$gte:20}}) //$gte==> greter then equal to 20 wala mata show garxa
    // const result = await studentModel.find({age:{$lt:21}}) //$lt==> less then to 21 wala mata show garxa
    // const result = await studentModel.find({age:{$lte:20}}) //$lt==> less then equal to 20 wala mata show garxa
    // const result = await studentModel.find({age:{$ne:20}}) //$ne==> not equal to 20 wala mata show garxa
    // const result = await studentModel.find({age:{$in:[25,26]}}) //in ==>(in array) 25 and 26 age jun jun ma hunxa teo matra shwo garxa..
    const result = await studentModel.find({age:{$nin:[25,26]}}) //nin ==>(not in array) 25 and 26 age jun jun ma hunxa teo shwo gardae na..
    // console.log(result)
}

// Logical Query Operator
const logDoc = async()=>{
    // const result = await studentModel.find({$and:[{age:20},{fees:9999.9}]}) //and operator
    // const result = await studentModel.find({$or:[{age:21},{fees:9999.9}]}) // or operator
    // const result = await studentModel.find({$or:[{age:{$lt:21}},{fees:9999.9}]}) // or operator
// const result = await studentModel.find({age:{$not:{$gt:24}}}) // not operator
const result = await studentModel.find({$nor:[{age:24}, {fees:9999.4}]}) // nor operator
    // console.log(result)
}




export {getAllDoc,logDoc,getCompDoc,getMixDoc,getSortDoc,getDocCount,getSkipDoc,getLimiteDoc,getDocByFieldSpecificField,getDocByField, getAllDocSpecificField, getSingleSpecificField}