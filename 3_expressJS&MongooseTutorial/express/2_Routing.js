// The way an application responds to a route

// Different methods decide [get,post,put..etc] that who will interact to which end [front,back] .example
// post goes to backend .

require('dotenv').config();

const express = require("express");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("from expres router");
});

// You can combine everything for a route in one method only .
app.all("/secret", (req, res, next) => {
  res.send("all function");
  next(); // passes the control to next handler as we can use multiple callbacks
});

app.get("/user", (req, res) => {
  res.send("Hello ! User Page");
  res.send(res.statusCode + " " + res.statusMessage);
});

// app.get("/", (res) => {
//   res.send("Why this not working ?");
// });

app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = process.env.PORT
app.listen(port);
