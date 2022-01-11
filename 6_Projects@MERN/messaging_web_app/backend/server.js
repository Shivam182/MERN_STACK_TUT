const express = require("express");
const mongoose = require("mongoose");
// import Messages from './dbMessages'
const Messages = require("./dbMessages");
const cors = require("cors");

const Pusher = require("pusher");

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1329824",
  key: "d78c5bfcddc1f7e29938",
  secret: "3061eb74251b17b8ff12",
  cluster: "ap2",
  useTLS: true,
});

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connectionURL =
  "mongodb+srv://admin121:GFWk4ZhjLLeHRVgc@cluster0.qjrjo.mongodb.net/messagingAppDB?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB Connected....");

  const msgCollection = db.collection("mymodels");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change has taken place : " + change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("Error trigirring Pusher ..!  ");
    }
  });
});

// api routes

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
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
