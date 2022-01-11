// import mongoose from 'mongoose';
const mongoose = require('mongoose')

const mySchema = mongoose.Schema({
    message: String,
    name:String,
    timestamp:String,
})
// const newModel = mongoose.model('myModel',mySchema)
module.exports = mongoose.model('myModel',mySchema)
// export default mongoose.model('myModel',mySchema)

// pass : GFWk4ZhjLLeHRVgc