import mongoose from "mongoose"



export const ToDoSchema = new mongoose.Schema({

    title: {
      type: String
    },
    content: {
      type: String,
      required: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
  });