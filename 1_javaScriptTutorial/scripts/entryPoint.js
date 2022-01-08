// Interacting with the DOM Objects using JS
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World I am Shivam";

// blocking code 
// still page doesn't loads untill you press the OK button
// This will block because its execution is just like that , not processing 
// we have handeled the processing thing but not the execution . 
// it was processed in the while in offload but , execution is user dependent . 
setTimeout(() => {
  window.alert("a message");
}, 0);

console.log("i am here ");
// Setting Attributes of HTML Tags :
const myImage = document.querySelector("img");
myImage.onclick = function () {
  let myNewSource =
    "https://cdn.pixabay.com/photo/2021/01/06/09/19/dresden-5893714__340.jpg";
  myImage.setAttribute("src", myNewSource);
};

// using neagtion operator for data not present !!
let myName;
if (!localStorage.getItem("name")) {
  myName = prompt("write your name ?", "randomName");
  localStorage.setItem("name", myName);
} else {
  myName = localStorage.getItem("name");
}

myHeading.textContent = `Hello My Name is ${localStorage.getItem("name")}`;

// Even after deleting data from local storage it does not goes away from current browser page
localStorage.removeItem("name");
