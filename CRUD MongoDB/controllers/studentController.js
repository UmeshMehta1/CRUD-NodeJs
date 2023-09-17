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

    static editDoc = (req,res)=>{
        res.render("edit")
    } 

    static updateDocById = (req,res)=>{
        res.redirect('/')
    }
    static deleteDocById = (req,res)=>{
        res.redirect('/')
    }
}

export {studentController}

