// // Syntactic Sugar

// class Car {
//   constructor(model, color, price) {
//     this.model = model;
//     this.color = color;
//     this.price = price;
//   }

//   //   ride() {}
// }

// Car.prototype.ride = function () {
//   console.log(`Car has superb ${this.model} and it has great ${this.color}`);
// };

// const mahindra = new Car("Scorpio", "black", 5000000);
// mahindra.ride();
// const tata = new Car("curvv", "blue", 23323223);
// tata.ride();

// class Course {
//   #students = [];
//   constructor(title) {
//     this.title = title;
//   }
//   enroll(student) {
//     this.#students.push(student);
//   }
//   getStudentsList() {
//     return this.#students;
//   }
// }

// const jsCourse = new Course("JS Advanced");
// jsCourse.enroll("Honey");
// console.log(jsCourse.getStudentsList());
// console.log(jsCourse.#students);

// class Person {
//   //   #student = [];
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hi! I am ${this.name}`);
//   }
// }

// class Student extends Person {
//   enroll(course) {
//     console.log(`${this.name} has enrolled in ${course}`);
//     // console.log(this.student);
//   }
// }

// class Admin extends Person {
//   createCourse(courseName) {
//     console.log(`${this.name} has created a ${courseName}`);
//   }
// }

// const s1 = new Student("Ravi");
// s1.greet();
// s1.enroll("react");

// const a1 = new Admin("New aDmin");
// a1.greet();
// a1.createCourse("javascript");

class User {
  accessDashboard() {
    console.log("accessing basic features");
  }
}
class AdminUser extends User {
  accessDashboard() {
    console.log("accessing dashboard with extra features or controls");
  }
}




let a = new AdminUser();
a.accessDashboard();


// function showDashboard(user) {
//   user.accessDashboard();
// }
// const normalUser = new User();
// const adminUser = new AdminUser();

// showDashboard(normalUser);
// showDashboard(adminUser);
