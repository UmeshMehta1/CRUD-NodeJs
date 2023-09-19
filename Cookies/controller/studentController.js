class StudentController{
    static set_cookie = (req,res)=>{
        res.send("set cokies.......")
    }
     static get_cookie = (req,res)=>{
        res.send("get cokies.......")
    }
     static delete_cookie = (req,res)=>{
        res.send("delete cokies.......")
    }
    
}

export default StudentController