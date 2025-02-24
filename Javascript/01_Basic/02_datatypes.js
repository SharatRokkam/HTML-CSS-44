// What are DataTypes?
// Data Type means what type of data is being used

// Data types has been categorized in two ways and they are :
// 1. Primitive 2. Non-Primitive(user defined)

// Primitive
// 1. Number
// const myNumber = 92393330;
// const myId = 92.23;

// 2. String - "" and ''
// let myName = "John Doe";
// let newName = "Something";

//3.Boolean
// let isStudent = false;

//4. Undefined
// let fruit;
// console.log(fruit);

// 5. null - when you don't want to assign any value to the variable but you have to give some value then it take null

// let myGoal = null;
// console.log(myGoal);

// imp - ES5 vs ES6
// ES5 - var and ES6 - let const
// ES5 - five primitive and ES6 - symbol and bigInt

// Symbol - unique
// let myId1 = Symbol("2343");
// let myId2 = Symbol("2343");

// console.log(myId1 == myId2);

// BigInt

// Non - Primitive Datatype
// 1. Array 2. Object 3. Function

// Every thing in js is an object only

// Array : An array in JavaScript is a type of global object used to store data. Arrays can store multiple values in a single variable, which can condense and organize our code.

// array index value always starts from 0

// let myArray = [1, "name", true, undefined, null];

// console.log(myArray[5]);
// console.log(myArray.length);

// Object :

const car = {
  color: "red",
  model: "alto",
  price: 500000,
  isSevenSeater: false,
};

console.log(car.price);
console.log(car.color);
console.log(car["model"]);
