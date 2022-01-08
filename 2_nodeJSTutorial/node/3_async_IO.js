const rd = require("readline");

const readline = rd.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`What's Your name ?`, (name) => {
  console.log(`Hi ${name}!`);
  readline.close();
});

// This gets executed first . Hence I/O operations that were blocking becomes non-blocking.
console.log(" i am first");


/**
 * Notes :
This non-blocking became possible because of callback thing only , that was registered at the time when question() function was called
and when user gave it the input means that now callback becomes executable now callback gets called , And the way 
callback gets called that is after the last console log , means not in order / or not in sequence , Hence it is called 
async programming . and callback is part of async programming . 
 */
