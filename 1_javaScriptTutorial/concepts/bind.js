/**https://www.freecodecamp.org/news/javascript-this-keyword-binding-rules/
 * What is Binding ?
 * Ans : As we know about execution context , and its environment variables , so Binding is simply adding all
 * the variables , functions , callbacks to that execution context , where a function will be invoked . 
 */

// WAYS OF BINDING

let getName = function () {
   
  console.log(this.name);

};

let user = {
  name: "Tapas",
  address: "Freecodecamp",
  popo:""
};

// call method passes the context with which a method will be called , means that 
/**
 * AS WE KNOW IN JS TO RUN CODE EVERYTHING IS EXECUTION CONTEXT , SO WHENEVER SOMETHING RUNS WE JUST NEED TO HAVE 
 * ALL THE VARIABLES AND VALUES IN SAME EXECUTION CONTEXT , SO THAT THEY COULD BE USED . HERE WE JUST DID THAT 
 * WITH CALL METHOD , WE PASSED THE USER OBJECT TO THE EXECUTION CONTEXT OF GETNAME FUNCTION . AND THEN FURTHER AS 
 * WE KNOW USE IS PRESENT IN THAT CONTEXT , HENCE NOW WE CAN ACCESS IT USING THIS KEYWORD , AS WE KNOW `THIS` IS 
 * ACTUALLY A OBJECT SO WE ARE JUST ACCESSING AN OBJECT'S INNER FIELDS . 
 */
getName.call(user);





