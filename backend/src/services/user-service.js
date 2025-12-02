import { userModel } from "../models/user-schema.js";

export const loginUser = async (userObject) => {
  try {
    const doc = await userModel.findOne({ email: userObject.email, password: userObject.password }).exec();
    return doc;
  } catch (error) {
    throw error;
  }
}

export const registerUser = async (userObject) => {
  try {
    const doc = await userModel.create(userObject);
    return doc;
  } catch (error) {
    throw error;
  }
}