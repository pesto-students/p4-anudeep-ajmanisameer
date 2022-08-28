function doTask1() {
  return new Promise((resolve, reject) => {
    resolve("Uno")
  })
}

function doTask2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dos") 
    }, 5000)
  })
}

function doTask3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Tres rejected")) 
    }, 2000)
  })
}


//Async/Await fn
// async function asyncFn() {
//   await Promise.all([doTask1(), doTask2(), doTask3()])
// }

const asyncFn = async () => {
    let uno = doTask1()
    console.log(uno)

    let dos = await doTask2()
    console.log(dos)

    let tres = await doTask3()
    console.log(tres)
}
asyncFn()


// Gen Fun
function* genFn() {
  yield (doTask1())
  yield (doTask2())
  yield (doTask3())

}

const gen = genFn()
gen.next()
gen.next()
gen.next()

