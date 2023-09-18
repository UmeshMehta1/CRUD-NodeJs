import todoModel from '../model/todo.js'

class todoController{
    static createDoc= async(req,res)=>{
        try {
           const {name}= req.body
        //    console.log(req.body);
           const doc= new todoModel({
               name:name,
              
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
            // console.log(req.body)
            const result = await todoModel.find()
            console.log(result)
            
            res.render("home", {data: result}) 
        } catch (error) {
            console.log("error")
        }
        
    }

    static editDoc = async(req,res)=>{
        try {
            const result = await todoModel.findById(req.params.id)
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
            const result = await todoModel.findByIdAndUpdate(req.params.id, req.body)
            console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
        
    }

    static deleteDocById = async(req,res)=>{
        try {
            const result=await  todoModel.findByIdAndDelete(req.params.id);
            console.log(result)
            res.redirect('/')
        } catch (error) {
            console.log(error)
        }
        
    }

}

export {todoController}

