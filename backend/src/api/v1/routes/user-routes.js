import express from 'express'

export const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
  res.send('<h1>Hello User</h1>');
})

userRoutes.get('/login', (req, res) => {
  res.send('<h1>Login</h1>');
})