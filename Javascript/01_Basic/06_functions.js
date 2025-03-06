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

// (function (n1, n2) {
//   console.log(n1 + n2);
// })(4, 19);

//function that does not have any name to it, that is "anonymous function"

// Write a function to check if the given is prime or not

// const isPrime = (num) => {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % 2 == 0) return false;
//   }
//   return true;
// };

// console.log(isPrime(5));
// console.log(isPrime(10));
// console.log(isPrime(644));
// isPrime(3);
// isPrime(19);
// isPrime(10);

// Write a function to check the given number is palindrome or not
// 121 -> 121, 444 --> 444
// print the number is palindrome and if not the print it is not a palindrome

//Armstrong -> 153 = 1*1*1 + 5*5*5 + 3*3*3 => 153

// callback

// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// function goodBye() {
//   console.log("goodbye");
// }

// greet("Shiva", goodBye);

// setTimeout(() => {
//   console.log("Hello world");
// }, 5000);

// setInterval(() => {
//   console.log("Hello world");
// }, 2000);

// let count = 0;

// let interval = setInterval(() => {
//   console.log("Count :", count);
//   count++;

//   if (count > 5) {
//     clearInterval(interval);
//     console.log("interval cleared");
//   }
// }, 1000);

// function printAlpha(alpha, time, callbackFunc) {
//   setTimeout(() => {
//     console.log(alpha);
//     callbackFunc;
//   }, time);
// }

// function printVowels() {
//   printAlpha("A", 2000, () => {
//     printAlpha("E", 4000, () => {
//       printAlpha("I", 3000, () => {
//         printAlpha("O", 5000, () => {
//           printAlpha("U", 1000, () => {});
//         });
//       });
//     });
//   });
// }

// printVowels();

function printVowels() {
  setTimeout(() => {
    console.log("A");
    setTimeout(() => {
      console.log("E");
      setTimeout(() => {
        console.log("I");
        setTimeout(() => {
          console.log("O");
          setTimeout(() => {
            console.log("U");
          }, 1000);
        }, 5000);
      }, 4000);
    }, 3000);
  }, 2000);
}

printVowels();

// Callback HELL


// Promise 