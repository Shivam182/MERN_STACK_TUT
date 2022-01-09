var childRoutes = require('./3_Router');
const express = require('express');
var app = express();
const database = require('../mongoose/database');
const userController = require('./controllers/User')

// For a complete section of ScienceBlogs , we handle its child routes like this . Instead of writing every route here 
app.use('/ScienceBlogs',childRoutes)
app.use('/api/user',userController);
app.listen(5000);