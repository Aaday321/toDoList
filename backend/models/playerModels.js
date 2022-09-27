import mongoose from "mongoose";

const Schema = mongoose.Schema

export const BookSchema = new Schema({
    title: {
      type: String,
      required: false
    },
    isbn: {
      type: String,
      required: false
    },
    author: {
      type: String,
      required: false
    },
    description: {
      type: String
    },
    published_date: {
      type: Date
    },
    publisher: {
      type: String
    },
    updated_date: {
      type: Date,
      default: Date.now
    }
  });