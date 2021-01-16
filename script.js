'use strict';
/* passed: by value vs by reference */

/* passed by reference
    -objects
    -arrays
*/
//objects
const person = {
    name: 'Mike',
    age: 25,
    work: 'software engineer',
}
// check first on the console by copy pasting
// function ref(a) { // a(parameter) => person(argument)
//     console.log(a);
// }
// ref(person);

// console second
function ref(person1) { // person(parameter) => person(argument)
    //modify person1
    person1.name = 'not my name'; // passed by reference therefore it changes obj => Person
    console.log(person1);
}

console.log(person);
ref(person);
console.log(person);

//arrays
const array = [1, 2, 3];

function ref2(arr) {
    console.log(arr);
}
ref2(array)
console.log(array)

function ref1(arr) {
    arr.push(4);
    console.log(arr);
}

console.log(array); // not yet modified
ref1(array);
console.log(array);

/* (most) Everything else is passed by value */

const num = 1; // location is created and saved in memory

const passByValue = (number) => {
    number = 2;
    console.log(number);
}
console.log(num);//1
passByValue(num);//2
console.log(num);// 2

/* example of mutability vs immutability ---- primitives vs non primitives */

const word = 'byValue?';

const stringByValue = word1 => {
    const word = word1.slice(0,-1);
    console.log(word);
}
console.log(word);
stringByValue(word);
console.log(word);