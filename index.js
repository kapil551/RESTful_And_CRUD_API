const express = require("express");
const app = express();

app.use(express.json());

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
