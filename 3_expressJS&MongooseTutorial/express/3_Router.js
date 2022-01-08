// These are used to make code more separable ,
// they can be used to handle child routes of any big route

var express = require("express");
var router = express.Router();

// This router without any path specific , its callback will get executed for every route
router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  res.send("Choose Field of science :");
});

router.get("/Chemistry", (req, res, next) => {
  res.send("Welcome to Chemistry Page !! ");
});

router.get("/Physics", (req, res, next) => {
  res.send("Welcome to Physics Page !! ");
});

router.get("/Biology", (req, res) => {
  res.send("Welcome to Biology Page");
});

module.exports = router;

// Go to 4_routingApplication to see how it works
