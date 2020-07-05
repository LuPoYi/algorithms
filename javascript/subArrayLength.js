/*
  Get sub array length
  a = [3, 1, 2, 1]
  k = 4

  [1, 2, 1] sum up <= k(k)

  ans: 3
*/

function maxLength(a, k) {
  function sumUpArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  var length = a.length
  var ans = 0

  for (var i = 0; i <= length; i++) {
    for (var j = i + 1; j <= length; j++) {
      if (j - i > ans && sumUpArray(a.slice(i, j)) <= k) {
        ans = a.slice(i, j).length
      }
    }
  }
  return ans

}

maxLength([3, 1, 2, 1], 4)