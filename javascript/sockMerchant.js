function sockMerchant(n, ar) {
  var count = 0
  while (ar.length > 0) {
    var item = ar.shift()
    var match_index = ar.indexOf(item)
    if (match_index != -1) {
      count++
      ar.splice(match_index, 1)
    }
  }
  return count
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])) // => 3