
/*
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0

a b c
  d
e f g

=> 7

*/


function hourglassSum(arr) {
  // 1 1 1 0 0 0
  // 0 1 0 0 0 0
  // 1 1 1 0 0 0
  // 0 0 2 4 4 0
  // 0 0 0 2 0 0
  var max = null
  var x_length = arr[0].length // how many columns 6
  var y_length = arr.length // how many rows 5

  for (var i = 0; i < y_length - 2; i++) {
    for (var j = 0; j < x_length - 2; j++) {
      var temp = arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]

      if (max == null) {
        max = temp
      } else {
        max = Math.max(max, temp)
      }
    }
  }
  return max
}


const testArray = [[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]]

console.log(hourglassSum(testArray))