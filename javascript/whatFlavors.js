// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
  // console.log("cost", cost)
  // console.log("money", money)
  // cost [ 1, 4, 5, 3, 2 ] 2 2 4 3
  // money 4
  // => reture [1, 4](index)
  // > Map - Performs better in scenarios involving frequent additions and removals of key-value pairs
  const map = new Map()
  for (let i = 0; i < cost.length; i++) {
    let currentValue = cost[i]
    let targetValue = money - currentValue

    if (map.has(targetValue)) {
      console.log(map.get(targetValue) + 1, i + 1)
      break;
    }

    map.set(currentValue, i)
  }
}