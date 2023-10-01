class StudentController{
    static get_session_info=(req,res)=>{
        console.log(req.session);
        console.log(req.session.id)
        console.log(req.session.maxAge)
        console.log(req.session.originalMaxAge)
        console.log(req.sessionID)

        res.send("sesson info")
    }

    // Session Delete
    static delete_session=(req,res)=>{
        req.session.destroy(()=>{
            console.log(`session deleted.....${req.session.id}`)
        })
        res.send("session Deleted")
       
        
    }

    // Session Regenerated.......
    static reg_session=(req,res)=>{
        req.session.regenerate(()=>{
            console.log(`session regenerated.. New session Id ${req.session.id}`)
        })
        res.send("session regenerated....")
    }

    //Example Session
    static example_session=(req,res)=>{
        req.session.device="mobile"
        if(req.session.count){
            req.session.count++
        }else{
            req.session.count=1
        }
        res.send(`Count: ${req.session.count}`)
    }

    static get_session_data=(req,res)=>{
        if(req.session.device){
            res.send(`Device: ${req.session.device} Count: ${req.session.count}`)
        }else{
            res.send("Session Data Device not found")
        }
    }

}

export {StudentController}