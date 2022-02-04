let board = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

console.log(board)

// check row
for (let i = 0; i < 9; i++) {
  JSON.stringify(board[i]) == JSON.stringify([1, 2, 3, 4, 5, 6, 7, 9, 8].sort())
}

// check column
// check group

for (let i = 0; i < 9; i++) {
  let ans = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let j = 0; j < 9; j++) {
    board[i][j]
  }
}
