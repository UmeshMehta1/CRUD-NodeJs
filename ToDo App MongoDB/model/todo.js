import mongoose from 'mongoose'

// Define schema

const todoSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
//   age: { type: Number, required: true, min: 18, max: 60 },
//   fees: { type: Number, required: true, min: 5000.5 },
})

//Model

const todoModel = mongoose.model("user", todoSchema)

export default todoModel;