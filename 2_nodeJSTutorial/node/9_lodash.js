// Lodash is a library that has plenty of methods for making array , objects operations more easy & one-line
const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);

//Explore complete methods here :->  https://lodash.com/docs/4.17.15
