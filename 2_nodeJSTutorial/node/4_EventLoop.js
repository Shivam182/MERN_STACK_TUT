// 4. This gets executed in next iteration of current iteration. but after the nextTick() method 
// if there is any 0 timer callback then it would be executed after it , else before it . 
setImmediate(() => {
  console.log("set Immediate callback");
});


// Now this can get executed with no exact order , it depends upon what time you give now , example :
// give time of 1ms [it gets executed before 0second timer] , give time of 1000ms [ it gets executed at last]
setTimeout(() => {
  console.log("pako");
}, 1000);


// 3. This lines up next to nextTick because of 0 timer , also if multiple same timed callbacks are there
// then they are executed in order they are present in code , even this happens for every type of callback
// not only for setTimeout .
setTimeout(() => {
  console.log("0 timer setTimeout");
  baz();
}, 0);


// 2. This gets executed just after the first batch of non-blocking code gets executed
// Also this callback is always placed at first in callback queue , no matter how late it comes in code
process.nextTick(() => {
  console.log("next Tick callback");
});

// 1. These both logs gets executed first , as they are part of non-blocking code
console.log("a console log at last ");
console.log("one more console log ");

function baz() {
  console.log("baz");

  // why it keeps getting left behind when we keep adding more fxns to bar function 
  setTimeout(() => {
    console.log("inner timeout baz");
  }, 0);
  bar();
}

function bar() {
  // Why this gets executed first before the main setImmediate fxn ? this is schduled for next iteration after that fxn ?
  // Ans : See bar has called this fxn of nexttick , so it tells that whenever bar exits instantly run this nextTick
  // The main setImmediate is still in the same iteration loop but in between we added nextTick method to be exec
  // just after bar gets over , earlier , it was --> exec setImmediate as bar gets over .
  process.nextTick(()=>{console.log('jhariya badhha')})

  // this is executed in the next iteration of main setImmediate 
  // if main setImmediate calls any tick , or any other non-blocking then it would have been exec before this
  // setImmediate
  setImmediate(() => {
    console.log("Inner setImmediate bar");
  });
  
  console.log("bar");
}
