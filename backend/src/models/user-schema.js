import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  'name': { type: String },
  'email': { type: String, require: true, unique: true },
  'password': { type: String, require: true, minLength: 8 },
});

export const userModel = mongoose.model("users", userSchema);