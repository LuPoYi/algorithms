/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  // find smallestNum
  while (k > 0) {
    let smallestNum, smallestIndex

    nums.forEach((num, i) => {
      if (smallestNum === undefined || smallestNum > num) {
        smallestNum = num
        smallestIndex = i
      }
    })
    nums[smallestIndex] = -nums[smallestIndex]
    k--
  }

  return nums.reduce((a, b) => a + b, 0)
}

console.log('answer', largestSumAfterKNegations([4, 2, 3], 1)) // 5
console.log('answer', largestSumAfterKNegations([3, -1, 0, 2], 3)) // 6
console.log('answer', largestSumAfterKNegations([2, -3, -1, 5, -4], 2)) // 13
console.log('answer', largestSumAfterKNegations([-2, 5, 0, 2, -2], 3)) // 11

// Example 1:

// Input: nums = [4,2,3], k = 1
// Output: 5
// Explanation: Choose index 1 and nums becomes [4,-2,3].
// Example 2:

// Input: nums = [3,-1,0,2], k = 3
// Output: 6
// Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
// Example 3:

// Input: nums = [2,-3,-1,5,-4], k = 2
// Output: 13
// Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
