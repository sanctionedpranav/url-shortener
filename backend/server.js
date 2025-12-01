import express from "express";
import { userRoutes } from "./src/api/v1/routes/user-routes.js";
import { error404 } from "./src/utils/middlewares/404.js";
import { connectToDB } from "./src/utils/db/connection.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(express.json());
app.use('/', userRoutes);
app.use(error404)

const promise = connectToDB();
promise.then((result) => {
  console.log('DB connected...');
  
  const server = app.listen(8080, err => {
    if (err) {
      console.log("Server crash", err);
    } else {
      console.log("Server running at PORT: ", server.address().port);

    }
  })
}).catch((err) => {
  console.log('DB connection failed.', err);
})

