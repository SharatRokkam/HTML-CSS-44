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

class Course {
  #students = [];
  constructor(title) {
    this.title = title;
  }
  enroll(student) {
    this.#students.push(student);
  }
  getStudentsList() {
    return this.#students;
  }
}

const jsCourse = new Course("JS Advanced");
jsCourse.enroll("Honey");
console.log(jsCourse.getStudentsList());
// console.log(jsCourse.#students);
