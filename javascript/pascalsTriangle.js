var generate = function (numRows) {
  let arr = []

  for (let i = 0; i < numRows; i++) {
    let subArray = []

    for (let j = 0; j <= i; j++) {
      let item
      if (j == 0 || j == i) {
        item = 1
      } else {
        item = arr[i - 1][j - 1] + arr[i - 1][j]
      }
      subArray.push(item)
    }
    arr.push(subArray)
  }
  return arr
};

console.log(generate(5))

  //  [1],
  //  [1,1],
  // [1,2,1],  // 2(index: 1) = sum(index(0, 1))
  //[1,3,3,1], // 3(index: 1) = sum(index(0, 1)), 3(index: 2) = sum(index(1, 2))
  //[1,4,6,4,1] // 4(index: 1) = sum(index(0, 1)), 6(index: 2) = sum(index(1, 2)), 4(index: 3) = sum(index(2, 3)) 