// Call
// Allows for resuse of the same function with different values
// COnstructor for getCoffee
function product(name, price){
  this.name = name;
  this.price = price
}

// hotCoffee is borrowing this property from product 
function hotCoffee(name, price){
  product.call(this, name, price)
  // first argument points to this inside product
  this.category = 'HOT'
}

console.log(new hotCoffee('Americano', 67).name)




// Bind
// Changes the value of this in a function
// by creating a bound fn which can be stored for later use
const coffee = {
  americano: 67,
  getAmericano: function(){
    return this.americano
  }
}
const unboundGetAmericano = coffee.getAmericano
console.log(unboundGetAmericano()) // ivoked at the global scope for this
// undefined
const boundGetAmericano = unboundGetAmericano.bind(coffee)
console.log(boundGetAmericano())
// 67




// Apply
//Allows for resuse of the same function with different values
// the apply() method accepts them as an array
const caffeine = {
  getAmericano: function(roast){
    return roast + " " + this.ingre1 + " " + this.ingre2 
  }
}

const americano = {
  ingre1: "Grinded coffee",
  ingre2: "Warm Water"
}

console.log(caffeine.getAmericano.apply(americano, ["Dark Roast"]))