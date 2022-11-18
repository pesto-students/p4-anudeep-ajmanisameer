Prototypes & Inheritance

Functions to be resued with multiple objects

  setPrototypeOf(child, parent)
  getPrototypeOf()

  var child = Object.create(parent)
  create child object with parent proto

# Constructor Functions
  When a function is used as a constrictor (with the new keyword), it's `this` is bound to the new object being constructed 

# Inheritence

# Object properties
 Internal properties obj.key
 External properties [[prototype]]
 Accessor properties (paor pf function with getter and setter)
  

`use strict` ?!!

.defineproperty
iteration withing properties of object



## Promises

const p = new Promise((resolve, reject) => {
  setTimeout(() => reject(10), 2000)
})

p.then(
  (val) => console.log(`val - ${val}`),
  (val) => console.error(`error - ${val}`)
)

// console.log(p)


  .then first argument is resolve and second argument is reject
  .catch works as for rejection/ (.then second argumane)
  .finally works are settlement (both resolve and reject) will be called in both senarios