function maxSubsetSum(arr) {
  console.log("arr", arr)
  let len = arr.length;
  let sumArray = new Array(len).fill(0)

  sumArray[0] = arr[0];
  sumArray[1] = Math.max(arr[1], sumArray[0]) // [ 2, 2, 0, 0, 0 ]
  for (let i = 2; i < arr.length; i++) {
    // self, lastSumUp,       self + lastLastSumUp
    sumArray[i] = Math.max(arr[i], sumArray[i - 1], arr[i] + sumArray[i - 2])
  }
  return sumArray[len - 1]
}


// console.log(maxSubsetSum([3, 7, 4, 6, 5]))
console.log(maxSubsetSum([2, 1, 5, 8, 4]))

// Kadane's Algorithm
// Maximum subarray problem