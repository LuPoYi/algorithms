/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums = nums.sort((a, b) => a - b)
  for (const item of nums) {
    if (nums[item] !== item) return item - 1
  }
  return nums.length
}

console.log('answer', missingNumber([3, 0, 1])) // 2
console.log('answer', missingNumber([0, 1])) // 2

console.log(
  'answer',
  missingNumber([
    45, 35, 38, 13, 12, 23, 48, 15, 44, 21, 43, 26, 6, 37, 1, 19, 22, 3, 11, 32, 4, 16, 28, 49, 29,
    36, 33, 8, 9, 39, 46, 17, 41, 7, 2, 5, 27, 20, 40, 34, 30, 25, 47, 0, 31, 42, 24, 10, 14,
  ])
) // 18
