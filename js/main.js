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

let bank_account = 0;
for (let i= 1; i < 101; i++){
    bank_account += i;
}

console.log(bank_account * 2);

// E. Euler

// I have already done this problem in a previous homework.

// Arrays and Control Flow

// A.
// 1. Elements
// 2. Yes, the elements in an array will remain in the order they were made in unless you modify that.
// 3. You could have the names of everyone in class in an array thus modeling the students in class.

const quotes = [
    'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty. -Maya Angelou',
    'Never rest on your laurels. Nothing wilts faster than a laurel sat upon. - Mary Kay',
    'Bad things are not the worst thing that can happen to us. NOTHING is the worst thing that can happen to us. - Richard Bach'
];

const randomThings = [1, 10, "Hello", true];
randomThings[0]
console.log(randomThings[0]);

randomThings[2] = "World";
console.log(randomThings[2]);

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
ourClass[2];
ourClass[4] = "Octocat";
ourClass.push("Cloud City");
console.log(ourClass);

const myArray = [5, 10, 500, 20];
myArray.push("Egon");
myArray.splice(0,1);
myArray.unshift("Bob Marley");
myArray.splice(4,1);
myArray.reverse();
console.log(myArray);

// 5. Yes I mutated the array.  To mutate means to manipulate the elements in the array.  The reverse method returns the array reversed.

const myNum = 9;
if (myNum < 100){
    console.log("little number");
} else {
    console.log("big number");
}

if (myNum < 5) {
    console.log("little number");
} else if (myNum > 10){
    console.log("big number");
} else {
    console.log("monkey");
}

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  // 1.

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
  kristynsCloset.splice(6, 0, "raybans");
  console.log(kristynsCloset);
  kristynsCloset[5] = "stained knit hat";
  console.log(kristynsCloset);
  thomsCloset[0][0];
  thomsCloset[1][1];
  thomsCloset[2][0];
  console.log(`Thom is looking fierce in a ${thomsCloset[0][3]}, ${thomsCloset[1][2]} and ${thomsCloset[2][2]}`);
  thomsCloset[1][2] = "Footie Pajamas";

  // Part IV.
  // A. printGreeting
  // I have already done this problem in a previous homework assignment

  const printCool = (name) => {
      console.log(`${name} is cool!`);
  }
  console.log(printCool('Captain Reynolds'));