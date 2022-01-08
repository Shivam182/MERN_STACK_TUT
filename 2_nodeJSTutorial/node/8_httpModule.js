const http = require("http");

const server = http.createServer((req, res) => {
  // we can also combine write & end method like this
  if (req.url === "/") {
    res.end("welcome to home page");
  } else if (req.url === "/about") {
    res.end("about page");
  } else {
    res.end(`
    <h1>oops!!</h1>
    <p>we can't seem page u r looking for</p>
    <a href="/">back home</a>
`);
  }
});

// When you run this , then the below fxn keeps running till you terminate it .
// But it is non-blocking code . as it executes all other fxns below it .
server.listen(5000, () => {
  console.log("server running");
});

console.log("i run before everyone");

// Though the server keeps running still that doesn't block its execution
setTimeout(() => {
  console.log("i do not get blocked");
}, 2000);

/**
 * Notes : Heard of ExpressJS ?
 * Ans : ExpressJS is a NodeJS based backend framework , means it is used to listen and fetch data from database ,
 * More Important thing is that Express JS uses HTTP module of NodeJS to do all the tasks . all its methods are using
 * this module only under the hood .
 */
