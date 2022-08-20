// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     }
//   };
// }

// const stack = createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => [10]
// stack.items = [10, 100, 1000];// Encapsulationbroken!

function createStack() {
  let items = []
  // Write your code here...
  return {
    push(item){
      items.push(item)
    },
    pop(item){
      return items.pop()
    },
    getList(){
      return items
    }
  }
}

const stack = createStack();


stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items); // undefined
console.log(stack.getList()) //10
