function whatFlavors(cost, money) {
  // cost [ 1, 4, 5, 3, 2 ]
  // money 4
  // => reture [1, 4](index)

  const map = new Map()
  for (let i = 0; i < cost.length; i++) {
    let currentValue = cost[i]
    let targetValue = money - currentValue

    if (map.has(targetValue)) {
      return [map.get(targetValue) + 1, i + 1]
    }

    map.set(currentValue, i)
  }
}

console.log(whatFlavors([1, 4, 5, 3, 2], 4))