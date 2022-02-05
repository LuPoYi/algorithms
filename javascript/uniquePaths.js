/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let board = Array(m)
    .fill()
    .map(() => Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        board[i][j] = 1
      } else {
        const topNum = board[i - 1]?.[j] || 0
        const leftNum = board[i]?.[j - 1] || 0
        board[i][j] = topNum + leftNum
      }
    }
  }
  return board[m - 1][n - 1]
}

console.log('answer', uniquePaths(3, 2)) // 3
console.log('answer', uniquePaths(3, 3)) // 6
console.log('answer', uniquePaths(3, 4)) // 10
console.log('answer', uniquePaths(3, 7)) // 28
