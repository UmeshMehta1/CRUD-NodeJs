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


// Delete Document

const deleteDocById = async (id)=>{
    try{
        const result = await studentModel.findByIdAndDelete(id)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
const deleteOneDoc = async (id)=>{
    try{
        const result = await studentModel.deleteOne({_id:id})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
const deleteOneDocByAge = async (a)=>{
    try{
        const result = await studentModel.deleteOne({age:a})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}

const deleteManyDoc = async (a)=>{
    try{
        const result = await studentModel.deleteMany({age:a})
        console.log(result)
    }catch(err){
        console.log(err)
    }
}


export {deleteDocById, deleteOneDoc,deleteOneDocByAge,deleteManyDoc}