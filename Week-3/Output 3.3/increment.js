function createIncrement() {
  let count = 0;
  function increment()
  {
    count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();
// count set to 0
// Message string is created(not logged); count is 0

increment();
increment();
increment();
// increment function gets triggered but maintaining it's lexical scope

log();// What is logged?
// Count is 0 

//Reason -> Message string was not changed when the count was incremented
// hence it remained 0 (since the time line 2 was instantiated)