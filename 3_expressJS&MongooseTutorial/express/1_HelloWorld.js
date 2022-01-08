const express = require('express');

// Instance of express module
const app = express();

// port number on which app will run 
const port = 5000;


app.get('/',(req,res)=>{
    res.send('Hello World From ExpressJS')
})

// This will not show on the website because it is a post request . its res.send is not linked to yout frontend 
app.post('/',(req,res)=>{
    res.send('Why from here also ?')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})
