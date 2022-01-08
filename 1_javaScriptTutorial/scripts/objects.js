/** javascript objects are a collection of properties , and every property is key / value pair .
 * remember in JS Objects keys are not strings as in JSON . Also unlike in JSON , JS Objects can have functions as values
 * in that case that particular property is called a method .
 *
 *  {
 * key1:'anyString',
 * key2:[anyArray],
 * key3:23,
 * key4:function(arg){return(anything)}
 * key5:#
 * }
 *
 * Here key4 is a property , which acts as a method
 *
 */

// ctrl+. the three dots to see class implementation of this function
function anyObject(name, age, homeTown, ZIP) {
  // this keyword is used to bind any property to this object , without this keyword we won't be able to access those properties
  this.name = name,
  this.age = age,
    this.otherInfo = {
      djs: "qd",
    },
    // any object method must return a value , if its void then at last you will get undefined , because when that method finishes execution , there is nothing in front of property now so , the property becomes undefined
    this.fxn = (item) => {
      return item;
    };
}

// other way of instanting a JS object , here you don't need this keyword 
myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

// This is called assigning extra properties to any object : but where these extra properties actually go ?
anyObject.popo = "shivam";
anyObject.tptp = "yadav";
anyObject.uiuiu = 98;



// prototype modification - it adds a new property to specified object and can be accessed by any inherited object , but its different than above assigning of extra props 
// anyObject.prototype.pp1 = 'added pt'
// const ijb= new anyObject();
// ijb.pp1 // accessible
// ijb.popo // in-accessible
// console.log(ijb.popo)

// Why is the difference between both logs below ??
// console.log(anyObject);
// console.log(anyObject + " this "); // why it does not shows extra props

// This method is only meant for assigning extra [other tha constructor] properties , So it will give an error because no extra property naemd as anyFunction or otherInfo is in the object
// anyObject.otherInfo.ZIP = 465;
// anyObject.anyFunction('any param')


// const ab = new anyObject("jhasd", 45, "dsafd", 68451);
// console.log(ab.fxn(89));



// Accessing the extra assigned props
// console.log(anyObject.popo + ' extra prop')

// const newObj = new anyObject("shivam", 45);
// console.log(newObj.age + ' '+ newObj.name + ' '+ newObj.undefinedProperty)

// This will be undefined not null .
// console.log(anyObject.other)

// We can also modify Standard Objects 
// const kj = new Object();
// Object.prototype.hih = 'fucked'
// console.log(Object.prototype.hih)