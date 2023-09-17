import StudentModel from "../models/Student.js"

class studentController{
  
    static createDoc= async(req,res)=>{
     try {
        const {name,age,fees}= req.body
        console.log(req.body);
        const doc= new StudentModel({
            name:name,
            age:age,
            fees:fees
        })
        // saving document
        const result = await doc.save()
        console.log(result);
        res.redirect('/')
        
     } catch (error) {
        console.log(error)
     }
        
    }
  
    static getAllDoc = async (req,res)=>{
        try {
            const result = await StudentModel.find()
            // console.log(result)
            res.render("home", {data: result}) 
        } catch (error) {
            console.log("error")
        }
        
    }

    static editDoc = async(req,res)=>{
        try {
            const result = await StudentModel.findById(req.params.id)
            // console.log(req.body)
            res.render("edit",{data:result})
        } catch (error) {
            console.log(error)
        }
      
    } 

    static updateDocById = async(req,res)=>{
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
        res.redirect('/')
    }

    static deleteDocById = async(req,res)=>{
        try {
            const result=await  StudentModel.findByIdAndDelete(req.params.id);
            console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
        
    }
}

export {studentController}

