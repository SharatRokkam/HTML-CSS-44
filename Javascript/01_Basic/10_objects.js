// Objects
// Objects are collection of key and value pairs, where each key will a string and value can be of any data type

// 1. Object Literal

// const mySym = Symbol("myKey1");

// let userOne = {
//   "full name": "John Doe",
//   email: "john@google.com",
//   //   ["mySym"]: "key1",
//   age: 23,
//   isStudent: true,
//   attendance: ["Monday", "Wednesday"],
//   greeting: function () {
//     console.log("Hello JS user");
//   },
//   fullname: {
//     firstName: "John",
//     lastName: {
//       firstLast: "ljafjla",
//       secondLast: 223,
//     },
//   },
// };

// console.log(userOne.fullname.lastName.secondLast);

// console.log(userOne.email);
// console.log(userOne["full name"]);

// console.log(userOne["mySym"]);
// console.log(userOne.greeting());

// userOne.email = "suneel@micro.com";
// Object.freeze(userOne);
// userOne.email = "suneel@chatgpt.com";

// console.log(userOne["email"]);

// 2. new Object

// const employee = new Object();

// employee.name = "Something";
// employee.email = "something@gmal.com";

// Object.seal(employee);

// employee.name = "Nothing";
// delete employee.name;
// employee.age = 23;

// console.log(employee);

// let obj1 = {
//   a: 1,
//   b: 2,
// };

// let obj2 = { b: 5, d: 4 };

// Assign
// const merged = Object.assign({}, obj1, obj2);
// console.log(merged);

// Spread Operator (...) and Rest Operator (ES6)
// let obj = { ...obj1, ...obj2 };

// console.log(obj);

// Object Destructuring

// const user = { name: "Srinu", age: 26, email: "gmeil.com" };

// const { name, age, email } = user;

// console.log(name);
// console.log(age);
// console.log(email);

// console.log(user.hasOwnProperty("name"));
// console.log(user.hasOwnProperty("fullname"));

// console.log(Object.keys(user));
// console.log(Object.values(user));

// Object.entries

// 99%

let products = [
  {
    id: 1,
    productName: "Mobile",
    productQuantity: 23,
  },
  {
    id: 2,
    productName: "Laptops",
    productQuantity: 50,
  },
  {
    id: 3,
    productName: "Tablets",
    productQuantity: 10,
  },
  {
    id: 4,
    productName: "Monitor",
    productQuantity: 20,
  },
  {
    id: 5,
    productName: "Cables",
    productQuantity: 288,
  },
];



console.log(products[2].productName);
