// This is react method not node method
// import { myName } from "./Module";

// Correct method to import modules in node js
// const myName = require('./Module');
// const myPerson = require('./Module')

const sayHi = (name) => {
  console.log(`hello there ${name}`);
};

// sayHi(myPerson.newPrson.name);
// sayHi(myPerson.myName);

// All The functions of this module always gets executed
require("./main2");

/**
# If you want to export something use module.exports = {whatever}
# in case you want to export explicitly named objects you may use module.exports.WhateverName = thatObject
# the above thing also works for functions & constants as it is just the new name by which that file will be exported .
# But Do Remember that export explicitly named things at last of every other type of export , else it won't get exported .
# If you want to know which thing in my module is getting exported & which thing not , just do console.log(module)
# When u import any module all its functions will work & gets executed does not matter you used it or not somewhere in the running module
# while installing nodemon use npm install nodemon -D [ D specfies Dev dependencies ] so that it remains differentiated in package.json file to be removed further
 */
