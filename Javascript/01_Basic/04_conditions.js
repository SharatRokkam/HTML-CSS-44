// let age = 18;

// if (age > 18) {
//   console.log("you can vote");
// } else {
//   console.log("you can't vote come next year");
// }

// let num = prompt("enter your number");
// let num = 10;

// if (num % 2 == 0) {
//   console.log("number is even");
// } else {
//   console.log("odd");
// }

// if else if

// let grade = 20;

// if (grade >= 90) {
//   console.log("you scored A+");
// } else if (grade >= 80) {
//   console.log("you scored A");
// } else if (grade <= 80 && grade >= 60) {
//   console.log("you scored B");
// } else if (grade <= 60 && grade >= 40) {
//   console.log("you scored C");
// } else {
//   console.log("sorry you failed");
// }

// syntax
// switch (expression) {
//   case value1:
//   //execution
//   case value2:
//   //execution
//   case value3:
//   //execution
//   case value4:
//   //execution
//   default:
//   //execution
// }

// let days = "Wednesday";

// switch (days) {
//   case "Monday":
//     console.log("its monday");
//     break;
//   case "Tuesday":
//     console.log("its Tuesday");
//     break;
//   case "Wednesday":
//     console.log("its wednesday");
//     break;
//   case "Thursday":
//     console.log("its thursday");
//     break;
//   case "Friday":
//     console.log("its Friday");
//     break;
//   case "Saturday":
//     console.log("its Saturday");
//     break;
//   case "Sunday":
//     console.log("its Sunday");
//     break;
//   default:
//     console.log("invalid day");
// }

//1. WAP that checks whether the number is positive , -ve or zero

// 2.WAP to check if the number is divisible is divisible by 3 then print "fizz" and if its divisible by 5 print "buzz", if both then print "fizzbuzz"

// 3. WAP to check the password entered by user(use prompt) if it matches print "access granted" else "access denied"

// 4. Leap year checker : WAP to check given year is leap year or not
// Logic : A year is leap year if it is divisible by 4 but not by 100 unless it is also divisible by 400

//5. WAP that takes a number (1-12) as input and prints the corresponding month name.
//input : 2 output : february

// 1 to N

let numb = 30;

if (numb % 3 == 0 && numb % 5 == 0) {
  console.log("FizzBuzz");
} else if (numb % 3 == 0) {
  console.log("fizz");
} else if (numb % 5 == 0) {
  console.log("buzz");
} else {
  console.log(numb);
}
