import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
const app = express();
const mongoDBURL="mongodb+srv://admin:admin@registartion.9b5sl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hellow to Registarion API");
});

const PORT = process.env.PORT || 3000;

mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server Running on Port:${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));
