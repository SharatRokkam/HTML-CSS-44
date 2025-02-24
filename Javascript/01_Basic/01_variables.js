// console.log("Hello World");

// variables

//camelCase
const accountId = 123;
let accountEmail = "sharat@innomatics.in";
var accountPassword = "123232";
accountCity = "Hyderabad";

// accountId = 232;
// console.log(accountId);

// accountPassword = "23231";

// accountCity = "Bengaluru";
// accountEmail = "hc@hsc.in";

var accountType;

// console.log(accountType);

/*
Prefer not to use var 
because it is not block scope
*/

// console.log(accountPassword);
// console.log(accountCity);
// console.log(accountEmail);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountType,
]);

//var is function and global scoped, variables created with var can be redeclared and reassigned.
//let is block scoped it can be reassigned but cannot be redeclared.
//const is used to create constants, it cannot be reassigned and redeclared. it has to assigned and declared on the same line...


