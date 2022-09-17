var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let count = 0
  let size = n * n
  let left = 0
  let right = n - 1
  let top = 0
  let bottom = n - 1
  while (count < size) {
    //go right
    for (let i = left; i <= right; i++) {
      count++
      matrix[top][i] = count
    }
    top++

    // going down
    for (let i = top; i <= bottom; i++) {
      count++;
      matrix[i][right] = count;
    }
    right--;

    //going left
    for (let i = right; i >= left; i--) {
      count++;
      matrix[bottom][i] = count;
    }
    bottom--;

    //going up
    for (let i = bottom; i >= top; i--) {
      count++;
      matrix[i][left] = count;
    }
    left++;
  }
  console.log(matrix)
  return matrix
};

generateMatrix(3)