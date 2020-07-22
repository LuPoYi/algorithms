function minimumAbsoluteDifference(arr) {
  // 3 -7 0
  arr = arr.sort((a, b) => a - b)
  console.log(arr)
  let min = null
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1]
    if (min === null || diff < min) {
      min = diff
    }
  }
  return min
}


// 1 -3 71 68 17
// => 3 (71 - 68)