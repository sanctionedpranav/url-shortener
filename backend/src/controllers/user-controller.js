import { loginUser } from "../services/user-service.js";

export const home = (req, res) => {
  res.send('<h1>URL shortner</h1>');
}

export const login = async (req, res) => {
  const userInfo = req.body;

  try {
    const doc = await loginUser(userInfo);
    if (doc && doc._id) {
      res.json({ message: "login Successful!", id: doc._id, email: doc.email });
    } else {
      res.json({ message: "Invalid Email or Password!" });
    }
  } catch (err) {
    res.json({ error: "Something went wrong!", err: err });
    console.log('login failed.', err);
  }
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