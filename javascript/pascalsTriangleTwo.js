var getRow = function (rowIndex) {
  let arr = [1]

  for (let i = 0; i <= rowIndex; i++) {
    let newRow = []
    for (let j = 0; j <= i; j++) {
      let item
      if (j == 0 || j == i) {
        item = 1
      } else {
        item = arr[j - 1] + arr[j]
      }
      newRow.push(item)
    }
    arr = newRow
  }
  return arr
};

console.log(getRow(3)) // [1,3,3,1]


  //  [1],
  //  [1,1],
  // [1,2,1],  // 2(index: 1) = sum(index(0, 1))
  //[1,3,3,1], // 3(index: 1) = sum(index(0, 1)), 3(index: 2) = sum(index(1, 2))
  //[1,4,6,4,1] // 4(index: 1) = sum(index(0, 1)), 6(index: 2) = sum(index(1, 2)), 4(index: 3) = sum(index(2, 3)) 