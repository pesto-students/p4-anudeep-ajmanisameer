// fun to check if char is vowel
function isVowel(char) {
  return "aeiou".includes(char);
}

function vowelCount(str) {
  // initializing a map
  const vowelMap = new Map()
  for (let char of str) {
    // convert char to lowercase
    let lowerCaseChar = char.toLowerCase()
    //check if char is a vowel
    if (isVowel(lowerCaseChar)) {
      //check if char exist on vowelMap as a key 
      if (vowelMap.has(lowerCaseChar)) {
        // add +1 to the value
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1)
      } else {
        // create a  new key-value pair
        vowelMap.set(lowerCaseChar, 1)
      }
    }
  }
  return vowelMap;
}

console.log(vowelCount('Striaidfensdilmnolknung'))