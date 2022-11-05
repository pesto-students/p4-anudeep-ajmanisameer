var isValid = function (s) {
  if (s.length % 2 != 0) return false

  let stack = []
  for (let c of s) {
    if (c == ")" && stack[stack.length - 1] === "(") {
      stack.pop()
    } else if (c == "}" && stack[stack.length - 1] === "{") {
      stack.pop(c)
    } else if (c == "]" && stack[stack.length - 1] === "[") {
      stack.pop(c)
    } else {
      stack.push(c)
    }
  }

  return !stack.length

};

console.log(isValid("{[{[{[{((()))]}]}]}"))