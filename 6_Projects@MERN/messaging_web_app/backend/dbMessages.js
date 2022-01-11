// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const mySchema = mongoose.Schema({
    message: String,
    name:String,
    timestamp:String,
})
module.exports = mongoose.model('mymodels',mySchema)

// pass : GFWk4ZhjLLeHRVgc