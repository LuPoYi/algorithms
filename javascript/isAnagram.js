/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

console.log('answer', isAnagram('anagram', 'nagaram')) // true
console.log('answer', isAnagram('rat', 'car')) // false
console.log('answer', isAnagram('a', 'ab')) // false
console.log('answer', isAnagram('ab', 'a')) // false

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
