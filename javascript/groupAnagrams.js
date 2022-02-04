/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let answer = []
  let strObject = {}
  let groupIndex = 0

  for (const str of strs) {
    const sortStr = str.split('').sort().join('')
    if (strObject[sortStr] === undefined) {
      answer[groupIndex] = [str]
      strObject[sortStr] = groupIndex
      groupIndex++
    } else {
      const index = strObject[sortStr]
      answer[index].push(str)
    }
  }

  return answer
}
// ["Nano","Volvo","BMW","Nano","VW","Nano"].reduce(function(a, e, i) {
//   if (e === 'Nano')
//       a.push(i);
//   return a;
// }, []);   // [0, 3, 5]
console.log('answer', groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])) // [["bat"],["nat","tan"],["ate","eat","tea"]]

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
