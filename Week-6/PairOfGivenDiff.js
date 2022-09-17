var findPairs = function (nums, k) {
  let hashMap = {}

  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i] - k] !== undefined || hashMap[nums[i] + k] !== undefined) {
      return 1
    }
    hashMap[nums[i]] = i
  }
  return 0
};


console.log(findPairs([5, 10, 3, 2, 50, 80], 78))
