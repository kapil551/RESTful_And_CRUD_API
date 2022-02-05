const express = require("express");
const app = express();

app.use(express.json());

// router
const userRouter = require("./routers/user");

// middleware

// routes
app.use("/users", userRouter);


app.get("/", (req, res) => {
    res.send("API is running");
});

const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log("Server is running...");
});
