// **  IN PROGRESS (NOT YET DONE) ** //

const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
}

class MyPromise {
  constructor(callback) {
    this.state = STATE.PENDING;
    this.value = undefined;
    this.handlers = [];
    try {
      callback(this._resolve, this._reject);
    } catch (err) {
      this._reject(err)
    }
  }
  _resolve = (value) => {
    this.updateResult(value, STATE.FULFILLED);
  }
  
  _reject = (error) => {
    this.updateResult(error, STATE.REJECTED);
  }

}

const getNumber = (resolve, reject) => {
  let x = Math.random();
  if (x / 5 == 0) {
    resolve()
  } else reject()
}

getNumber()

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(10), 2000)
// })

// p.then(
//   (val) => console.log(`val - ${val}`),
// ).catch(
//   (val) => console.error(`error - ${val}`)
// ).finally(
//   () => console.log(`end`)
// )




// console.log(p)