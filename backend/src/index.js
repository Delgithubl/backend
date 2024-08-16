// require("dotenv").config({path:'/.env'});
import dotenv from "dotenv";



import connectDB from "./db/index.js";

dotenv.config({
  path :'/.env'
})

connectDB()







/*

import express from "express";

const app = express();
//1st approch for connecting to mongodb

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}/ ${DB_name}`);
    app.on("error", (err) => {
      console.log(err);
    })

    app.listen(process.env.PORT, () => {
      console.log(`server is running on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log(error);
    throw err;
  }
})();
*/