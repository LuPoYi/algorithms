/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const isExistMap = new Map()

  const isVeryHappy = (num) => {
    if (isExistMap.get(num)) {
      return false
    } else {
      isExistMap.set(num, true)
    }

    const ary = num.toString().split('')
    const answer = ary.reduce((sum, i) => sum + Number(i) * Number(i), 0)

    if (answer === 1) {
      return true
    } else {
      return isVeryHappy(answer)
    }
  }

  return isVeryHappy(n)
}

// 1111111
console.log('answer: ' + isHappy(19)) // true
console.log('answer: ' + isHappy(1111111)) // true

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
