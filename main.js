//// Variables - var, let, const --------------------------------------------

// If you want a general rule: always declare variables with const.
// If you think the value of the variable can change, use let.
// var is not used anymore
/*
let age = 30;

age = 33;

console.log(age);
*/

//// JavaScript Data Types - String, numbers, boolean, null, undefined, symbol

/*
const name1 = 'Henry';
const number = 10;
const rate = 4.6;
const isCool = true;
const x = null;
let z;
const y = undefined;

console.log(typeof name1);
console.log(typeof number);
console.log(typeof rate);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof z);
console.log(typeof y);
*/

//// Concatenation - using template literals with backtext ` -----------------
/*
const myname = 'Gayan';
const myage = 38;

hello = `My name is ${myname} and I am ${myage} years old..`;
console.log(hello);
*/

//// Arrays - Variables that hold multiple values ----------------------------
/*
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'lemmons', 10];
console.log(fruits);
console.log(fruits[2]); // to access elements inside an array

fruits.push('mangoes'); // to add elements 

console.log(fruits.indexOf('oranges'));
*/

//// Object Literals (contains key value pairs) ------------------------------
/*
const person = {

    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['tennis', 'cricket', 'football'],
    address:{
        street: '50 main street',
        city: 'Boston',
        limit: 20345
    }
}

console.log(person.address, person.firstName);

console.log(person.hobbies[1]);

// Destructuring - to pull stuff out from the Object Literal

const {firstName, lastName, age, address:{city}} = person;
console.log(firstName, lastName, age, city);
*/

//// Array of Objects ----------------------------------------------------
/*
const toDos = [{
    id:1,
    text: 'take out trash',
    isCompleted: true
},
{
    id:2,
    text: 'meeting 02',
    isCompleted: true
},
{
    id:3,
    text: 'call a friend',
    isCompleted: false
}];

console.log(toDos);
*/
// to convert toDos into JSON format
/*
const toDosJson = JSON.stringify(toDos);
console.log(toDosJson);
*/
//// Loops ---------------------------------------------------------------

// 1. For loop
/*
for(let i=0; i<8; i++){

    console.log(`For loop value of i is ${i}`);
};
*/
// 2. while loop
/*
let i = 0;

while(i<10){

    console.log(`While loop value of i is ${i}`);
    i++;

}
*/
// 3.1 to loop through items of an array (least used method)
/*
for(let i=0; i<toDos.length; i++){

    console.log(toDos[i].text);

}
*/
// 3.2 to loop through items of an array (somewhat used method)
/*
for(let todo of toDos){

    console.log(todo.text);

}
*/
// 3.3 to loop through items of an array ***(High order array methods)***
// ForEach, map, filter
/*
toDos.forEach(function(toDos){

    console.log(toDos.text);

});
*/
/*
const todosText = toDos.map(function(toDos){

    return toDos.text;

});

console.log(todosText);
*/
/*
const todosCompleted = toDos.filter(function(toDos){

    return toDos.isCompleted === true;

});

console.log(todosCompleted);
*/
/*
// How to chain-on other array methods

const todosChainOn = toDos.filter(function(toDos){

    return toDos.isCompleted === true;

}).map(function(toDos){

    return toDos.text;

}).map(function(toDos){

    return toDos.id;

})

console.log(todosChainOn);
*/

//// Conditionals --------------------------------------------------------
/*
const x = 10;

if(x == 10){

    console.log(`x is 10`);

}

const y = '20';

if(y == 20){

    console.log('y is 20 regardless its a string');

}

if(y === 10){ // triple equla maches the type as well. always use === (== sparingly)

    console.log('y is 10');

}

const z = 20;

if(z === 30){

    console.log('z is 30');
}else if(z > 30){
    console.log('z is greater than 30');
} else{
    console.log('z is less than 30');

}

// using || and &&

if(x < 10 || z === 20){

    console.log('z is less than 10 or z is 20');
}
*/

// Use of Ternary Operator ( ? ) - say as "Then"
/*
const x = 11;

const color = x > 10 ? 'red' : 'blue';


ADD SWITCH & CASE here <-------------------------- ********************

*/

//// Functions ---------------------------------------------------------

// method 1 
/*
function addNums(num1, num2){

    console.log(num1 + num2);
}

addNums(3,5.5);
*/
// method 2
/*
function addNums(num1, num2){

    return num1 + num2;
}

console.log(addNums(3,5));
*/

// method 3 - arrow functions
/*
const addNums = (num1, num2) => {

    return num1 + num2;
}

console.log(addNums(3,5));
*/
// or can shrink it like below
/*
const addNums = (num1, num2) => num1 + num2;

console.log(addNums(3,5));
*/

//// Object Oriented Programming ------------------------------------------

// Constructor

