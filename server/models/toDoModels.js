import mongoose from "mongoose"



export const ToDoSchema = new mongoose.Schema({

    note: {
      type: String
    },
    myId:{
      type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
  });