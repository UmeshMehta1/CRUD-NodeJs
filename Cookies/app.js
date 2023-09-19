import express from 'express'
import cookieParser from 'cookie-parser'
import web from './routes/web.js'
const app = express();

app.use(cookieParser());

app.use('/', web)

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})