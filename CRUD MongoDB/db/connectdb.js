import mongoose from 'mongoose'

const connectDB = async(DATABASE_URL)=>{
    try{
        const DB_OPTIONS={
            dbName:'school',
        }

        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("connected successflly...");
    }catch(err){
        console.log(err);
    }

}

export default connectDB