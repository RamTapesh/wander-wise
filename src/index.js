import express from "express";
import connectDB from "./config/db.js";
import HANDLERS from "./handlers/index.js";
import errorMiddleware from "./middlewares/error.js";
import { authMiddleware } from "./middlewares/auth.js";
import cors from "cors";

const app = express();

// DB connection
connectDB()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

app.use(cors({
    origin: process.env.BASE_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE","OPTIONS"],
   allowedHeaders: ["Content-Type", "Authorization"], // Add other allowed headers here
  }))

// Body parser
app.use(express.json());



// Auth middleware (before routes)
 app.use(authMiddleware);

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Wander Wise");
});

app.use("/", HANDLERS);

// Error handler (always last)
app.use(errorMiddleware);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
);
