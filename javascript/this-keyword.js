const warrior = {
  health: 100,
  damage: 39,

  remainingHealth: function () {
    return this.health - this.damage;
  },

  healthRemaining: function () {
    if (this.remainingHealth() > 0) {
      console.log(
        `You're still up! with ${this.remainingHealth()} health remaining`
      );
    } else {
      console.log("You have fallen");
    }
  },
};

warrior.healthRemaining();

const student = {
  name: "Andrew",
  age: 29,
  renderStudent: function () {
    console.log(this.name, this.age);
  },
};

student.renderStudent = student.renderStudent.bind(student); // Will return a new function with a new value that always points to the student object

const activities = {
  render: student.renderStudent,
};

// student.renderStudent();
activities.render();

// const teacher = {
//   name: "Andrew",
//   age: 29,
//   renderStudent: function () {
//     console.log(student.name, student.age);
//   },
// }; // When we use 'this' if there are changes it won't require you to change the code for
// when we use this.name it will refer to the object and a change in the name won't require us changing our code

class Student {
  constructor() {
    this.name = "James";
    this.age = 20;
  }

  // addAttribute() {
  //   this.test = "Success!";
  // }

  render() {
    console.log(this.name, this.age);
  }
}

const andrew = new Student();
andrew.render();
