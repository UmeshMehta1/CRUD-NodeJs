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


//Update Document

const updateDocById = async(id)=>{
    try{
        const result = await studentModel.findByIdAndUpdate(id,{
            name:"Mukesh"
        })
        // const result = await studentModel.findByIdAndUpdate(id,{
        //     name:"Aman"
        // }, {returnDocument:"after"})
        // console.log(result);
    }catch(err){
        console.log(err)
    }
}

const updateOneDoc = async(id)=>{
    try {
        const result=await studentModel.updateOne({_id: id},{name:'shyam'});
        // const result=await studentModel.updateOne(
        // {_id: id},
        // {name:'shyam'},
        // {upsert:true});  //upsert true lae id no milae ko khad ma aafe new id create gar dinxa
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const updateOneDocByAge = async(a)=>{
//     try {
//         const result=await studentModel.updateOne({age: a},{name:'laptop'});
//         console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
}

const updateOneDocByName = async(n)=>{
    try {
        const result=await studentModel.updateOne({name: n},{age:40});
        // console.log(result)
    } catch (error) {
        console.log(error)
    }
}

const updateManyDoc = async(a)=>{
    try {
        // const result=await studentModel.updateMany({age: a},{name:"Dollor"});
        const result=await studentModel.updateMany({age: a},{name:"upsertName"},{upsert:true});
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
export {updateDocById,updateManyDoc,updateOneDocByName,updateOneDoc,updateOneDocByAge}