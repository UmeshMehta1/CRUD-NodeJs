import express from 'express'
import web from './routes/web.js'
import session from 'express-session'
const app = express()


//session
app.use(session({
    name:"umesh",
    secret:"iamkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))

app.use('/', web);


app.listen(3000,()=>{
    console.log('server is running on port 3000');
})