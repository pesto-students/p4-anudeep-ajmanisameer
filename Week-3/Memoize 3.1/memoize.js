//Array to store already calculated values
const prevValues = []

function add (...args) {
  //check if same set of arguments are passed before
  if(prevValues[{...args}] != null){
    console.log(`memoised`)
    return prevValues[{...args}] 
  }

  // returning the addition of all arguments
  return args.reduce(function (acc, cur){
    prevValues[{...args}] = acc + cur
    return acc + cur 
  })
}

//calculates runtime of function passed
function time(fn){
  console.time()
  fn();
  console.timeEnd()
}

time(() => add(22, 333, 4444,55555)) 
time(() => add(22, 333, 4444,55555)) // memoized
time(() => add(22, 333, 4444,55555)) // memoized
time(() => add(22, 333, 4444,55555, 666666))// calculated
time(() => add(22, 333, 4444,55555, 666666, 7777777))// calculated










