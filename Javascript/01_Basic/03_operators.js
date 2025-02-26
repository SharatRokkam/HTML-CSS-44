// What are Operators?
// Operands and Operators
// Operators in Javascript are symbols that are used to perform operations on variables and values

// 1. Arithmetic Operator
// 2. Assignment Operator
// 3. Logical Operator
// 4. Comparison Operator
// 5. String Operator
// 6. Ternary Operator
// 7. typeof and instanceOf
// 8. Bitwise Operator

// Arithmetic Operator : are used to perform mathematical operations
// Example : +, -, *, %, /, **

// console.log(4 + 5);
// console.log(5 - 3);
// console.log(5 * 3);
// console.log(10 % 2);
// console.log(10 / 2);
// console.log(3 ** 2);

// Assignment Operator : used to assign values to variables
// Example : = (equal to), +=, -=, *=, /=, %= , **=

// let x = 10;

// console.log();

// x != 10
// x += 10
// x = x + 10
// // x -= 10
// x = x - 10
// // x *= 10
// x = x * 10

// Comparison Operator : used to compare two or more values and return in true or false

// Example : ==(double equal to), ===(strictly equal to) , !=, !==, <, >, >=, <=

//imp : == and ===, == it checks just the value but === it compares or checks both data type and value
// console.log(10 == "10");
// console.log(10 === "10");
// console.log(10 != "10");
// console.log(10 !== "10");
// console.log(40 > 2);
// console.log(40 >= "40");
// console.log(40 <= 40);
// console.log(40 < 4);

//type conversion and type coercian

//Logical Operator : &&, ||, !
// console.log(true && false);
// console.log(true || false);
// let a = 10;
// console.log(!a);

// Ternary Operator : check the condition
// condition ? true : false

// let age = 23;

// let result = age > 20 ? "you can drive" : "you cannot drive";
// console.log(result);

// typeOf and instanceof

// console.log(typeof "10")

// String Operator

// let firstName = "Something";
// let lastName = "    ";

// console.log(firstName + lastName);

// + unary operator : number

// console5.log(true);
// console.log(+false);
// console.log(+"10");
// console.log(+null);

// increment and decrement
// ++ and --

// postfix increment(x++) and prefix increment(--x)
// postfix decrement(x--) and prefix decrement(--x)

// let x = 10;
// console.log(x++); //10     11
// console.log(x--); 11       10
// console.log(x);

// console.log(--x); //9
// console.log(++x); //10
// console.log(x); //10

// let a = 5;

// let b = a++ + ++a + a-- + --a;
// console.log(b);

// 5    6
// 6    7
// 5 + 7 + 7 + 5

// (BODMAS)

// let x = 3;
// x = x++ + ++x * 2 - --x;
// console.log(x);
//3 + (5 *2) - 4
// 3 + 10 - 4 = 9

// let y = 10;
// let result = y-- - --y + ++y + y++;
// console.log(result, y);

let a = 4,
  b = 5;

let c = a++ * --b + ++a * b-- - a-- * b++;

// let  c = (4 * 4) + (6 * 4) - (6 * 3)
// c = 16 + 24 - 18
//40 -18 = 22
// 5
// 4
console.log(a, b, c);
