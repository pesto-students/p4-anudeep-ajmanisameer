function hasDuplicate(iter) {
  const mySet = new Set()
  let duplicate = false
  for (let x of iter) {
    if (mySet.has(x)) {
      duplicate = true
    } else {
      mySet.add(x)
    }
  }
  return duplicate
}

console.log(hasDuplicate([1, 5, -1, 4, -1]))