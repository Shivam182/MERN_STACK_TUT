const mongoDB = require("mongoose");

const userSchema = mongoDB.Schema({
  userName: {
    type: String,
    required: true,
  },
  eMail: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

// Converting user Schema to model
mongoDB.model('User',userSchema)

// Exporting this model
module.exports = mongoDB.model('User');