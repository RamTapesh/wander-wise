import express from "express";
import connectDB from "./config/db.js";
import HANDLERS from "./handlers/index.js";
import errorMiddleware from "./middlewares/error.js";


const app = express();


connectDB() 
.then(() =>{})
.catch(() =>{})
.finally(() =>{});
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Welcome to Wander Wise");
});

app.use("/", HANDLERS);
app.use(express.json());
app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
);
