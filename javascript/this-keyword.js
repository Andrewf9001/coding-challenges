const warrior = {
  health: 100,
  damage: 89,

  remainingHealth: function () {
    return this.health - this.damage;
  },

  healthRemaining: function () {
    if (this.remainingHealth() > 0) {
      return `You're still up! with ${this.remainingHealth()} health remaining`;
    } else {
      return "You have fallen";
    }
  },
};

console.log(warrior.healthRemaining());

const student = {
  name: "Andrew",
  age: 29,
  renderStudent: function () {
    console.log(this.name, this.age);
  },
};

student.renderSTudent = student.renderStudent.bind(student); //will return a new function with a new value that always points to the student

const activities = {
  render: student.renderStudent,
};

student.render();

class Student {
  constructor() {
    this.name = "Andrew";
    this.age = 29;
  }

  addAttribute() {
    this.test = "Success!";
  }

  render() {
    console.log(this.name, this.age);
  }
}

const andrew = new Student();
