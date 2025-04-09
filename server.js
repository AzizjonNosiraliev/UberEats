const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const connectDB = require("./config/db.js");

require("dotenv").config();

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

//default page
app.get("/", (req, res) => {
  res.send("Welcome to Uber Eats home page");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
  connectDB();
});
