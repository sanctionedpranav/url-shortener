import { registerUser } from "../services/user-service.js";

export const home = (req, res) => {
  res.send('<h1>URL shortner</h1>');
}

export const login = (req, res) => {
  res.send('<h1>Login</h1>');
}

export const register = async (req, res) => {
  const userInfo = req.body;

  try {
    const doc = await registerUser(userInfo);
    res.json({ message: "Registration Successful!", id: doc._id });
  } catch (err) {
    res.json({ error: "Something went wrong!", err: err });
    console.log('Registration failed.', err);
  }
}