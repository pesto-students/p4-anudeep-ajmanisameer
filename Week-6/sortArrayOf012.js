var sortColors = function (nums) {

  //void condition
  if (nums.length === 0 || nums.length == 1) return

  let start = 0
  let end = nums.length - 1
  let index = 0

  while (index <= end && start < end) {
    if (nums[index] == 0) {
      nums[index] = nums[start]
      nums[start] = 0
      start++
      index++
    } else if (nums[index] == 2) {

      nums[index] = nums[end]
      nums[end] = 2
      end--
    } else {
      index++
    }

  }
  console.log(nums)
  return nums

};

sortColors([0, 0, 1, 2, 0])


