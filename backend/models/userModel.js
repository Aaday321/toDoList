import mongoose from "mongoose";

const Schema = mongoose.Schema

export const UserSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

})