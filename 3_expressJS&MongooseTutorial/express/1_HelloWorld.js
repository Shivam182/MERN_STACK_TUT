const express = require("express");

// Instance of express module
const app = express();

// port number on which app will run
const port = 5000;

// get method is bound to application's frontend
app.get("/", (req, res) => {
  res.send("Hello World From ExpressJS");
});

// Duplicate routes case : first one is shown else are ignored
app.get("/", (req, res) => {
  res.send("duplicate route");
});

// This will not show on the website because it is a post request . its res.send is not linked to yout frontend
app.post("/", (req, res) => {
  res.send("Why from here also ?");
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
