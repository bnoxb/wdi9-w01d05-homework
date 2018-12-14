// VARIABLES AND DATATYPES

// 1. const or let = "value"

// 2. variable = 'new definition' - must be a variable declared by using let to be able to change it.

// 3. variable = newVariable

// 4. declare variable is when you first make a variable like: const variableName,  you do not need to give it an initial value.  
//  assign allows you to set a specific value to the variable.  Define a variable refers to assigning a value to a variable during initialization or otherwise.

// 5. Pseudocoding is a strategy to plan out your code by writing down in english step by step logic of what you are going to do.
//  you should do this because it will help you become more efficient and better at coding.

// 6. 70 - 80% of time should be spent planning how you are going to solve a problem.

// Part B
// 1.
let firstVariable;
firstVariable = 'Hello World';
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = 'Hello World';
console.log(firstVariable);

// The value of firstVariable is 1.

const yourName = 'Robbie';
console.log('Hello, my name is ' + yourName);

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false === false === false === false === false === false === true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(48 == '48');

const animal = 'cow';
const isCow = (str) => {
    if (str === animal) {
        console.log('Moooooooo!');
    } else {
        console.log("Hey! You're not a cow")
    }
}
isCow('cow');
let legalAge = 16;

const isOfAge = (age) => {
    if ( age >= legalAge) {
        console.log('Here are the keys');
    } else {
        console.log("Sorry, you're too young");
    }
}
isOfAge(14);

// LOOPS

// A.

for (let i = 0; i <= 10; i++) {
    console.log(`the number is ${i}`);
}

for (let i = 10; i<= 400; i++) {
    console.log(`Counting up ${i}`);
}

for (let i = 12; i<= 4000; i += 3){
    console.log(`Counting up by 3s ${i}`);
}

//B.

for (let i = 2; i < 101; i+= 2) {
    console.log(`${i} <-- is an even number`);
}

for (let i = 1; i < 101; i++){
    if (i % 5 === 0) {
        console.log(`I found a ${i}. High five!`);
    } else if (i % 3 === 0) {
        console.log(`I found a ${i}. Three is a crowd.`);
    }
}