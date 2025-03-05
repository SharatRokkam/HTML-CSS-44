// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//     continue;
//   }
//   console.log(i);
// }

//break and continue
// for (let index = 10; index > 0; index--) {
//   if (index === 3) {
//     console.log(index);
//     break;
//   }
// }

// let fruits = [
//   "apple",
//   "pineapple",
//   "watermelon",
//   "orange",
//   "mango",
//   "grapes",
//   "banana",
//   "jack fruit",
// ];

// for (let index = 0; index < fruits.length; index++) {
//   console.log(fruits[index]);
// }

// while loop

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let i = 1; //initialization

// while (i <= 10) {
//   //condition
//   console.log(i);
//   i++; //increment/decrement
// }

// do while

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let withDrawalAmt = 6000;
// let balance = 5000;

// while (withDrawalAmt > balance) {
//   console.log("Entered withdrawal amt is invalid");
//   withDrawalAmt = 3000;
// }

// balance -= withDrawalAmt;
// console.log(`Successful transaction! you remaining balance is ${balance}`);

// Array of Object

// for in

// let student = {
//   name: "honey",
//   age: 24,
//   isStudent: true,
//   id: 2233,
// };

// for (let key in student) {
//   //string interpolation
//   console.log(`${key}`);
// }

let fruits = [
  "apple",
  "pineapple",
  "watermelon",
  "orange",
  "mango",
  "grapes",
  "banana",
  "jack fruit",
];


for (let element of fruits) {
  console.log(fruits[element], element);
}
