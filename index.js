const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.use(express.json());
dotenv.config();

// connect database
const connectDB = require("./database/dbConnect");
connectDB();

// router
const studentRouter = require("./routers/studentRoute");

// middleware

// routes
app.use("/students", studentRouter);


app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
    console.log("Server is running...");
});
