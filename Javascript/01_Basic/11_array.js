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

// let employee = new Array(5);
// employee[3] = "emp4";

// console.log(employee);

// ****************** *****************************************

// indexOf, lastIndexOf, findIndex, find, includes
//checking and searching the elements

// let numbers = [10, 20, 20, 30, 50];

// console.log(numbers.indexOf(20)); index or -1
// console.log(numbers.lastIndexOf(20));

// console.log(numbers.includes(30)); true or false

// let result = numbers.find((num) => num > 25);
// console.log(result);

// let index = numbers.findIndex((num) => num > 25); //
// console.log(index);

// iteration and transformation

// let numbers = [10, [20, [20, [30, 50], -1, [231]], 102], 32, 11];

// numbers.forEach((num) => console.log(num * 2));

// some and every

// let some = numbers.some((num) => num > 0);
// console.log(some);

// let number = numbers.every((num) => num > 0);
// console.log(number);

// let sort = numbers.sort((a, b) => b - a);
// console.log(sort);

// console.log(numbers.reverse());

// console.log(numbers.flat(5));
// console.log(numbers.indexOf(20));

// numbers[0][1];

// Map, filter, reduce

// let numbers = [10, 20, 20, 31, 51];

// const even = numbers.map((num) => num * 2);
// console.log(even);

// const even = numbers.filter((num) => num % 2 != 0);
// const even = numbers.filter((num) => num % 2 != 0);
// console.log(even);

// Reduce - single value
// let reduced = numbers.reduce((acc, num) => acc * num, 0);

// 0 + 10 = 10
//10 + 20 = 30
//30 + 20 = 50
//50 +31 = 81
// 81  + 51 = 132
// console.log(reduced);

// 10 + 20
// 30 + 20
// 50 + 31
// 81 + 51
// 132

// Real world example

let products = [
  { name: "milk", category: "dairyProduct", price: 100 },
  { name: "chocolate", category: "snacks", price: 120 },
  { name: "Chips", category: "snacks", price: 10 },
  { name: "spice", category: "kitchen", price: 149 },
  { name: "turmeric", category: "kitchen", price: 180 },
];

// products.map((product) => console.log(product.name));

// const above100 = products.map((product) => {
//   if (product.price > 100) {
//     console.log(product.name);
//   }
// });

// console.log(above100);

// const reduced = products.reduce((acc, product) => acc + product.price, 0);

// console.log(reduced);
