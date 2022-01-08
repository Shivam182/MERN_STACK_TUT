var application = require('./3_Router');
const express = require('express');
var app = express();
const database = require('../mongoose/database');

// For a complete section of ScienceBlogs , we handle its child routes like this . Instead of writing every route here 
app.use('/ScienceBlogs',application)
app.listen(5000);
