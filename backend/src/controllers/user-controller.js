export const home = (req, res) => {
  res.send('<h1>URL shortner</h1>');
}

export const login = (req, res) => {
  res.send('<h1>Login</h1>');
}

export const register = (req, res) => {
  const userInfo = req.body;
  console.log("userInfo", userInfo);

  res.send('<h1>Register</h1>');
}