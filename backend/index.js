const express = require("express");
const cors = require("cors")
require("dotenv").config();
const { connection } = require("./config/db.js");
const {todosRoute} = require("./routes/todos.route.js")
const {userRoute} = require("./routes/user.route.js")

const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 8500;

app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});

app.use("/todos", todosRoute)


app.listen(PORT, async () => {
  try {
    await connection
    console.log(`Welcome to ${PORT}`);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
});
