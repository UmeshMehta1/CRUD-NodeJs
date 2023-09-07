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

console.log(studentSchema.path('age'))  // ==> check garna ko ligi yasto garnu parxa

//compailing schema
const studentModel = mongoose.model('student', studentSchema)

const createDoc = async ()=>{
    try{
        
const studentDoc = new studentModel({
    name: 'Umesh',
    age:21,
    feese: 9999.22,
    hobbies:['game', "programming"],
    isactive:true,
    comments:{value:"helllo commenta"},
})

// saving document
const result = await studentDoc.save()
console.log(result)

    }catch(error){
        console.log(error)
    }
}

// const studentModel = mongoose.model('student', studentSchema)


// you multiple user ko ligi ho...
const createMultiDoc = async ()=>{
    try{
        
const rajeshDoc = new studentModel({
    name: "Rajesh",
    age:25,
    feese: 9999.12,
    hobbies:['game', 'mobile', 'facebook'],
    isactive:true,
    comments: {value:'this is rajesh'},
})
const rameshDoc = new studentModel({
    name: "Ramesh",
    age:25,
    feese: 9999.12,
    hobbies:['game', 'mobile', 'facebook'],
    isactive:true,
    comments: {value:'this is rajesh'},
})
const kamleshDoc = new studentModel({
    name: "Kamlesh",
    age:25,
    feese: 9999.12,
    hobbies:['game', 'mobile', 'facebook'],
    isactive:true,
    comments: {value:'this is rajesh'},
})
const maheshDoc = new studentModel({
    name: "mahesh",
    age:25,
    feese: 9999.12,
    hobbies:['game', 'mobile', 'facebook'],
    isactive:true,
    comments: {value:'this is rajesh'},
})
const ramDoc = new studentModel({
    name: "Ram",
    age:20,
    feese: 9999.12,
    hobbies:['game', 'mobile', 'facebook'],
    isactive:true,
    comments: {value:'this is rajesh'},
})

// saving document
// const result = await studentDoc.save() // single data
// console.log(result)

// for many or multipale student doc insert.
const result = await studentModel.insertMany([rajeshDoc, rameshDoc,ramDoc,kamleshDoc, maheshDoc])
console.log(result)

    }catch(error){
        console.log(error)
    }
}
export {createDoc, createMultiDoc} // yaha 2ote methode use gare ko xu single insert or multiple insert
                                   // yauta yauta use garda pani hunxa 