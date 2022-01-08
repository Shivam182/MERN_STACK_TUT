const mongoDB = require("mongoose");

// Accesing env variable
require("dotenv").config();
const db_URL = process.env.DB_URL;

// Database connection code
mongoDB.connect(
  db_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (anyError, conectionToDB) => {
    // check error
    if (anyError) {
      console.log(anyError);
    } else {
      console.log("Connection to DB successful ....");

      // contains Info about the DB------
      // console.log(conectionToDB);
    }
  }
);
