function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(this.name.toUpperCase())
}

function Emp(name, id) {
  Person.call(this, name)
  this.id = id
}

Emp.prototype.printId = function () {
  console.log(this.id)
}


//Es5
Object.setPrototypeOf(Emp.prototype, Person.prototype)


const e = new Emp('Aj', 13)

e.printId()
e.printName()

// console.log(Object.getPrototypeOf(p1) == Person.prototype)
// console.log(Object.getPrototypeOf(Person) == Function.prototype)
// console.log(Object.getPrototypeOf(Object) == Function.prototype)
// console.log(Object.getPrototypeOf(Function.prototype) == Object.prototype)
// console.log(Object.getPrototypeOf(Object.prototype) == null)
// console.log(Object.getPrototypeOf(Function) == Function.prototype)


