const express = require("express");
const app = express();

const cors = require("cors");

// Adding middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200);
    res.json({message: "Welcome to Contact book application."});
});

module.exports = app;
