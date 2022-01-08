const secret = 'super secret';
const myName = 'shivam';
const person = {
    name: 'jhon',
    age:45,
    sirName:'claude'
}
// This does not gets exported as we see in exports object of console module .
module.exports.juu = person.age

module.exports = {myName , secret};

// Export explicitly named things in the last only .This gets exported
module.exports.newPrson = person;

// This too gets exported 
module.exports.rere = person.sirName;

// Get to know about this module 
console.log(module)

// This also does not gets exported
module.exports.jsd = person.name