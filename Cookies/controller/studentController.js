class StudentController{
    static set_cookie = (req,res)=>{
        res.cookie("username", "umeshmehta1", {maxAge: 40000});
        res.cookie("username2", "umeshmehta2");
        res.cookie("name", "umeshmehta3");
        res.send("set cokies.......")
    }
     static get_cookie = (req,res)=>{
        console.log(req.cookies)
        console.log(req.cookies.username2)
        console.log(req.cookies.name)
        res.send("get cokies.......")
    }
     static delete_cookie = (req,res)=>{
        res.clearCookie("username")
        res.clearCookie("name")
        res.send("delete cokies.......")
    }
    
}

export default StudentController