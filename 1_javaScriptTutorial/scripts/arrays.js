// An array example in JS : dynamic arrays 
let array = new Array(1,2,3,'shivam',6,0,'kumar',34,'yadav');
console.log(array)

// iterate every element of array 
array.forEach((item)=>{console.log(item)})

// it maps elements from one array to other array one by one by performing specified operation
let array2 = array.map((item)=>{return item.toLocaleString()})
console.log(array2)

// filters elements of specific type and provides it in a new array
let array3 = array.filter((item)=>{return(typeof item === 'number')})
console.log(array3)

// arrays can be used to store any thing as an extra key/value pair . as we know how javascript objects look like .
array.proprty = 'lolipoli'
console.log(array.proprty)


// console.log(NaN === NaN)
