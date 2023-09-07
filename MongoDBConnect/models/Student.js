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

// compailing schema
const studentModel = mongoose.model('student', studentSchema)