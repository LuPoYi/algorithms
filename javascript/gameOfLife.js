/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  const DEAD = 0
  const LIVE = 1
  const BASE = 10

  const findLiveNeighborsLength = (b, i, j) =>
    [
      b[i - 1]?.[j - 1],
      b[i - 1]?.[j],
      b[i - 1]?.[j + 1],
      b[i]?.[j - 1],
      b[i]?.[j + 1],
      b[i + 1]?.[j - 1],
      b[i + 1]?.[j],
      b[i + 1]?.[j + 1],
    ].filter((x) => x === LIVE || x % BASE === LIVE)?.length

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j]

      if (item === LIVE) {
        const liveNeighborsLength = findLiveNeighborsLength(board, i, j)
        if (![2, 3].includes(liveNeighborsLength)) board[i][j] += BASE
      }
      if (item === DEAD) {
        const liveNeighborsLength = findLiveNeighborsLength(board, i, j)
        if (liveNeighborsLength === 3) board[i][j] += BASE
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j]
      if (item >= 10) {
        board[i][j] = item % 10 === 0 ? LIVE : DEAD
      }
    }
  }

  return board
}

// The board is made up of an m x n grid of cells, where each cell has an initial state: live (represented by a 1) or dead (represented by a 0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the m x n grid board, return the next state.
// Input: board = [
//   [0, 1, 0],
//   [0, 0, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ]
// Output: [
//   [0, 0, 0],
//   [1, 0, 1],
//   [0, 1, 1],
//   [0, 1, 0],
// ]

console.log(
  'answer',
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
)
