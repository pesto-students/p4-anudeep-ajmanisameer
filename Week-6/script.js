// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums[nums.length - 1])
//     nums.pop();
//   }
//   return nums
// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7, 8], 3))


// The approach is simple yet optimized. The idea is to reverse the array three times.
// For the first time we reverse only the last k elements.
//  Second time we will reverse first n-k(n=size of array) elements. 
//   Finally we will get our rotated array by reversing the entire array.

// const reverse = function (nums, k) {
//   k %= nums.length
//   let reverse = function (i, j) {
//     while (i < j) {
//       let temp = nums[i]
//       nums[i] = nums[j]
//       nums[j] = temp
//       i++
//       j--
//     }
//   }
//   reverse(0, nums.length - 1);
//   reverse(0, k - 1)
//   reverse(k, nums.length - 1)

// }

// console.log(reverse([1, 2], 2))


// var containsDuplicate = function (nums) {
//     const obj = {}
//     for (let i = 0; i < nums.length; i++) {
//       if (obj[nums[i]] === undefined) {
//         obj[nums[i]] = "obj[nums[i]]"
//       } else {
//         return true
//       }
//     }
//     return false
// };

// console.log(containsDuplicate([1, 8, 5, 2, 5, 4, 6, 5]))



// ##  1

// var maxSubArray = function (nums) {
//   let maxSum = nums[0]
//   let curSum = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (curSum < 0) {
//       curSum = 0
//     }
//     curSum = curSum + nums[i]
//     maxSum = Math.max(maxSum, curSum)

//   }
//   return maxSum


// };
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



// var generateMatrix = function (n) {
//   const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
//   let count = 0
//   let size = n * n
//   let left = 0
//   let right = n - 1
//   let top = 0
//   let bottom = n - 1
//   while (count < size) {
//     //go right
//     for (let i = left; i <= right; i++) {
//       count++
//       matrix[top][i] = count
//     }
//     top++

//     // going down
//     for (let i = top; i <= bottom; i++) {
//       count++;
//       matrix[i][right] = count;
//     }
//     right--;

//     //going left
//     for (let i = right; i >= left; i--) {
//       count++;
//       matrix[bottom][i] = count;
//     }
//     bottom--;

//     //going up
//     for (let i = bottom; i >= top; i--) {
//       count++;
//       matrix[i][left] = count;
//     }
//     left++;
//   }
//   console.log(matrix)
//   return matrix
// };

// generateMatrix(3)


// Spiral Order Matrix II
// var spiralOrder = function (matrix) {
//   let result = []
//   let left = 0
//   let right = matrix[0].length - 1
//   let top = 0
//   let botton = matrix.length - 1
//   while (left <= right && top <= botton) {
//     //go left to right 
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i])
//     }
//     top++

//     for (let i = top; i <= botton; i++) {
//       result.push(matrix[i][right])
//     }
//     right--

//     // if (left >= right || top >= botton) {
//     // }

//     if (top <= botton) {               // condition 1
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[botton][i])
//       }
//       botton--
//     }

//     if (left <= right) {               // condition 2
//       for (let i = botton; i >= top; i--) {
//         result.push(matrix[i][left])
//       }
//       left++
//     }


//   }
//   console.log(result)
//   return result
// };

// spiralOrder([
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]])

// findPairs([3, 1, 4, 1, 5], 2)


// var twoSum = function (nums, target) {

//   let hashTable = {}
//   for (let i = 0; i < nums.length; i++) {
//     // check if target -i  is the number present in the hash or not
//     if (hashTable[target - nums[i]] !== undefined) {
//       return [hashTable[target - nums[i]], i]
//     } else {
//       hashTable[nums[i]] = i
//     }
//   }
//   return [];
// };

// console.log(twoSum([2, 7, 11, 15], 9))