const express = require("express");
const mongoose = require("mongoose");
// import Messages from './dbMessages'
const Messages = require("./dbMessages");

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());

// DB config
const connectionURL =
  "mongodb+srv://admin121:GFWk4ZhjLLeHRVgc@cluster0.qjrjo.mongodb.net/messagingAppDB?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ???

// api routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World !!");
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send("error occured : " + err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Server Running on port ${port}`));
