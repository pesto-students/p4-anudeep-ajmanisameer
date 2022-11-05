
const threeSum = function (nums) {
  // two sum requires the pointers to go inwards; so sort
  nums.sort()
  let output = []

  // - 2 bc of triplets
  for (let i = 0; i < nums.length - 2; i++) {
    // handle duplicates if going over the same number
    if (i == 0 || (i > 0 && nums[i] != nums[i - 1])) {

      // 2 sum
      let low = i + 1;
      let high = nums.length - 1
      // looking for two numbers that add upto 0 - i
      let sum = 0 - nums[i]

      while (low < high) {
        if (nums[low] + nums[high] == sum) {
          output.push([nums[i], nums[low], nums[high]])
          // skipping duplicates for the nexr iteration
          while (low < high && nums[low] == nums[low + 1]) low++
          while (low < high && nums[high] == nums[high - 1]) high--
          low++;
          high--

        } else if (nums[low] + nums[high] > sum) {
          high--
        } else {
          low++
        }
      }
    }
    console.log(output)
    return output
  }

}

threeSum([3, 0, -2, -1, 1, 2])
