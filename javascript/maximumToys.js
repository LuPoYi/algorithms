// k = budget, try to buy more toys
function maximumToys(prices, k) {
  // 1 12 5 111 200 1000 10
  // => 4 , (k = 50)
  let budget = k
  let cost = 0
  let count = 0

  prices.sort(function (a, b) { // maybe I should implement sort...
    return a - b;
  })

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] + cost <= budget) {
      cost += prices[i]
      count++
    } else {
      break;
    }
  }

  return count
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50))