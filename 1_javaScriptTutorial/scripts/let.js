// Scope of let is block limited also needs to be initialized before using.

let a = 'shivam'
console.log("ppap");

// ANY SYNTAX ERROR -----------
uyuyi

// This gives an error that, cannot access b before initialization :
// When you comment out b whereever it is , now it gives different error "b is not defined" .
// Why is it so that it gives two different error two different times ? How did it know that b is defined in first case as we know javaScript runs & executes line by line ?
// Isn't it like that someone or the interpreter itself reads the code even after giving the error ? 
// Also why it did not show the last console log if it knows that b is defined somewhere ?
// Also now as you uncomment the above syntax error , you will not see any further code execution , it stops there only 
// All it tells that before execution something is there that reads the complete code & understands wheather a variable is defined or not 
// or there's any syntax error . They just run the code till where it is correct but they know beyond that also in our code . 
console.log(a+b);
let b = 'yadav';
console.log('at the last')
