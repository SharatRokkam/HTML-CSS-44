// function declaration - traditional way of creating function

// function multiply(num1, num2) {
//   console.log(num1 * num2);
// }

// multiply(5, 10);
// console.log(multiply(2, 10));
// console.log(multiply(5, 4));
// console.log(multiply(5, 1));
// console.log(multiply(5, 7));

// 2nd way - Function expression

// const sum = function (n1, n2, n3) {
//   console.log(n1 + n2 + n3);
// };

// sum(2, 4, 5);

// 3rd way - Arrow Function (ES6 version)
//concise way of creating the function

// const sum = (n1, n2) => {
//   console.log(n1 + n2);
// };

//Not writing function and return keyword
// const sum = (n1, n2) => n1 + n2;
// console.log(sum(5, 2));

//IIFE - Immediately invoked function

// 

(function (n1, n2) {
  console.log(n1 + n2);
})(4, 19);


//function that does not have any name to it, that is "anonymous function"