import express from "express";
import { userRoutes } from "./src/api/v1/routes/user-routes.js";
import { error404 } from "./src/utils/middlewares/404.js";
const app = express();

app.use('/', userRoutes);
app.use(error404)

const server = app.listen(8080, err => {
  if (err) {
    console.log("Server crash", err);
  } else {
    console.log("Server running at PORT: ", server.address().port);

  }
})