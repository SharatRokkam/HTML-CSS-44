// let a = 5;
// let b = a++ + ++a + --a + a--;
// console.log(b);

// Find the greatest among three numbers
// let first = 10,
//   second = 20,
//   third = 22;

// check if the triangle is valid.
// A triangle is valid if the sum of any two sides is greater than the third side.
// a = 3, b =4 , c = 5

// Convert the temperature (celsius to fahrenheit)
// formula : C * 9/5 + 32

// Write a program to check whether a number is multiple of both 5 and 11

let celsius = 30;

if (typeof celsius !== "number") {
  console.log("please enter valid number");
} else {
  let fahrenheit = celsius + 9 / 5 + 32;
  console.log(`The value of Celsius ${celsius} converted to ${fahrenheit}`);
}
