function rotLeft(a, d) {
  // a = 1, 2, 3, 4, 5
  // d = 4 left roataion
  // result = 5, 1, 2, 3, 4
  let result = []
  let a_length = a.length
  for (let i = 0; i < a_length; i++) {
    let idx = i + d
    if (idx >= a_length) {
      idx = idx - a_length
    }
    result.push(a[idx])
  }
  return result
}

console.log(rotLeft([1, 2, 3, 4, 5], 4))