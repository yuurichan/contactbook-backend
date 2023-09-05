const express = require("express");
const app = express();

const cors = require("cors");

const contactsRouter = require("./app/routes/contact.route");

// Adding middlewares
app.use(cors());
app.use(express.json());

// Router
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.status(200);
    res.json({message: "Welcome to Contact book application."});
});

module.exports = app;
