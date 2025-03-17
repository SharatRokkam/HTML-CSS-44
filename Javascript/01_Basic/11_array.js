// Array Literal

// let random = [1, "string", false, null, undefined, { first: "val" }];

// let random = [];

// console.log(random);

// Array constructor

// let random2 = new Array(5);
// let random2 = new Array(1, "string");

// console.log(random2);

// Array of

// let rndom = Array.of(4, "lja", false);

// console.log(rndom);

// Methods in Array

// Array adding and RemovingElement
// push and pop

// let fruits = ["apple", "banana", "custard apple", "dragon fruit", "mango"];

// push is used to add element in the array at last position
// console.log(fruits.push("pine apple"));
// console.log(fruits);
// pop is used to remove element in the array from the last position
// fruits.pop();
// console.log(fruits);

//shift and unshift
// fruits.shift();

// fruits.unshift("grapes");

// console.log(fruits);

// slice and splice

// let slicedArray = fruits.slice(0, 2);
// console.log(slicedArray);

// splice - add, remove

// let splicedArray = fruits.splice(0, 2, "grapes", "carrot");
// let splicedArray = fruits.splice(3, 0, "pomegranate");

// console.log(splicedArray);
// console.log(fruits);

// let employee = new Array(3);
// console.log(employee.push("emp3"));

// console.log(employee.shift());
// console.log(employee.unshift("emp10"));

let employee = new Array(5);
employee[3] = "emp4";

console.log(employee);
