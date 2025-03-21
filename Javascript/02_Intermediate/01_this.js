// console.log(this)

// "use strict"
// function showThis(){
//     console.log(this);
// }

// showThis()

// let user = {
//   name: "john",
//   greet: function () {
//     console.log(this.name);
//   },
// };

// console.log(user.name);

// user.greet();

// constructor function always starts with the capital letter
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const user1 = new User("Alice", 22);
// const user2 = new User("Grok", 34);
// const user3 = new User("John", 21);
// const user4 = new User("Mathew", 21);

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

const person = { name: "Madhu" };
const person2 = { name: "Srinu" };

function greet(designation, age) {
  console.log(
    `Hello! Mr.${this.name}, you are good ${designation} developer, ${age}`
  );
}
//argument = individually
greet.call(person, "frontend", 23);
greet.call(person2, "backend", 24);
//arguments in an array
greet.apply(person, ["fullstack", 74]);

// bind - it has to be referred to a new variable
const greetPerson = greet.bind(person);
greetPerson("java", 50);
