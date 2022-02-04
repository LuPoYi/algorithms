/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  atoz = 'abcdefghijklmnopqrstuvwxyz'
  let transform = ''
  let answer = 0

  // convert
  for (const item of s) {
    const num = atoz.indexOf(item) + 1
    transform += String(num)
  }
  console.log('transform', transform)

  // transform
  while (k > 0) {
    answer = 0
    for (const num of transform) {
      answer += Number(num)
    }
    transform = String(answer)
    k--
  }

  return answer
}

console.log('answer', getLucky('iiii', 1)) // 36
console.log('answer', getLucky('zbax', 2)) // 8
console.log('answer', getLucky('leetcode', 2)) // 6
// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

// Convert: "zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// Transform #1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// Transform #2: 17 ➝ 1 + 7 ➝ 8
