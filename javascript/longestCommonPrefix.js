/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const shortestLength = Math.min(...strs.map(({ length }) => length))
  for (let i = shortestLength; i >= 0; i--) {
    const target = strs[0].slice(0, i)

    if (strs.every((str) => str.slice(0, target.length) === target)) return target
  }

  return ''
}

console.log('answer: ' + longestCommonPrefix(['flower', 'flow', 'flight']))

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
