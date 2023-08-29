import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-router";
import adminRouter from "./routes/admin-router.js";


dotenv.config();
const app = express();

// middlewears
app.use(express.json())
  app.use("/user", userRouter);
  app.use("/admin", adminRouter);

mongoose
  .connect(
    `mongodb+srv://akash:${process.env.MONGODB_PASSWORD}@cluster0.pkknmce.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));





  
