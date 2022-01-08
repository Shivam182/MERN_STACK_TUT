const EventEmitter = require("events");

const eventEmt = new EventEmitter();

// this is a listener that responds to a particular event 
eventEmt.on("name", (str) => {
  console.log(`my name is ${str}`);
});

// If there is a duplicate event listener then it also gets executed 
eventEmt.on('name',()=>{
    console.log(`from duplicate one`)
})

// We can pass the arguments also to emit function which will be used as params of handler callback fxn !! 
const str = "shivam";
eventEmt.emit("name", str);