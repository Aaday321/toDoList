import mongoose from "mongoose";

const Schema = mongoose.Schema

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: Number
    },
    isCoach: {
        type: String,
        default: false
    },
    team: {
        type: String
    },
    speed: {
        type: Number,
        enum: [1,2,3]
    },
    offense: {
        type: Number,
        enum: [1,2,3]
    },
    defense: {
        type: Number,
        enum: [1,2,3]
    },
    shooting: {
        type: Number,
        enum: [1,2,3]
    },
    createdDate: {
        type: Date,
        default: Date.now
    }

})