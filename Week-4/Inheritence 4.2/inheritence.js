function Person() { }

Person.prototype.initialize = function (name) {
  this.name = name
}

class Teacher extends Person {
  constructor() {
    super()
  }

  teach(subject) {
    console.log(this.name, "is now teaching", subject)
  }
}

const him = new Teacher()
him.initialize('John')
him.teach('Inheritence')