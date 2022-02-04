/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  let cutObject = {}
  for (const item of s) {
    cutObject[item] = true
  }

  return Object.keys(cutObject).length - 1
}

console.log('answer', minCut('aab')) // 1
console.log('answer', minCut('efe')) // 0

// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// Example 1:

// Input: s = "aab"
// Output: 1
// Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
// Example 2:

// Input: s = "a"
// Output: 0
// Example 3:

// Input: s = "ab"
// Output: 1
