let blog = {
  name: "Tapas",
  address: "freecodecamp",
  pepparoni: "we do not use this property in below execution function",

  // why `this` logs even pepparoni , despite it is not being used below in the execution function , and 
  // as we studied that `this` is related to JS functions ? So it just logs the whole object it is present in 
  // Does that means `this` is associated with the object in which it is written , like in Java language ??

  /**
   * 
   * ANs : As we see below we used blog.message() to invoke the function , so yes it is surely related to 
   * JS Function only & also it stores info only related to the execution context in which it is written 
   * but as we use here blog to call fxn, hence it includes that object also in the execution context's
   * Environment Record.
   * But one more thing a function only gets called when some object calls it , also if a function just gets called
   * independently , then also if you log that fxn's this , it will show global things , SO it means even if no
   * explicit object is associated to function call , its related to global object . SO `this` is actually related to 
   * any object , and at second level , the function . It contains info of an object inside it , weatehr its custom or global 
   * because even if a function is independent then also window OR global object calls it to execute . 
   * 
   * All together we can say that `this` is an object of data about , the most recent object in the execution context
   * 
   */
  message: function () {
    console.log(`${this.name} blogs on ${this.address}`);
    console.log(this)
  },
};

// blog.message();


function greeting(obj) {
  // this `this` is differnt that logMessage's `this` ? despite they are in same function ? YEs , Because of execution context
  console.log(this);


  // Below variable is not added to this keyword . WHy ?
  // Ans : because the function in which `this` is present is inside a function that is associated with tom object
  var shivam = "shiam";
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old!`);
    console.log(this);
  };
}

const tom = {
  name: "Tom",
  age: 7,
};

const jerry = {
  name: "jerry",
  age: 3,
};

greeting(tom);
// greeting(jerry);


// How can we call this function using tom object ? 
/**
 * Ans : Because in the greeting function , its obj.logMessage means tom is calling the function , 
 * that statement of obj.logMessage simply means that , obj object now calls this method , which means that method 
 * is now bound to the obj OR tom object.
 */
tom.logMessage();
// jerry.logMessage();