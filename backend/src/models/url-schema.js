import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  'email': { type: String, require: true },
  'shortId': { type: String, require: true },
  'bigUrl': { type: String },
});

export const urlModel = mongoose.model("urls", userSchema);