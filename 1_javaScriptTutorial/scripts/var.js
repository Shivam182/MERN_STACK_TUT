var s = "shivam";

// This gives 'shivam undefined' but not an error Why Is it that like i know that it is there in the code but i won't tell you as it is not in the rule manual of JS to use a value before initialization ? But still they y u haven't given an error why even teling that its undefined ? What does it mean to have it undefined ?
// When we comment out y line then it gives error : 'y is not defined'
// console.log(s+' '+y)
// var y = 'yadav'

// Difference of Scope between var & let
{
  var a = "ppap";
  let b = "popo";
}
console.log(a, b);
