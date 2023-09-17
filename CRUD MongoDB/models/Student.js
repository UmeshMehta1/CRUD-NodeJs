import mongoose from 'mongoose'

// Define schema

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fees: { type: Number, required: true, min: 5000.5 },
})

//Model

const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel;