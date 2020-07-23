function activityNotifications(expenditure, d) {
  let ans = 0
  let len = expenditure.length
  let isOdd = d % 2 != 0

  for (let i = 0; i < len - d; i++) {
    // too slow, should use counting sort, avoid resorting
    let ary = expenditure.slice(i, i + d).sort((a, b) => a - b)

    let median
    if (isOdd) {
      median = ary[(d - 1) / 2]
    } else {
      median = (ary[d / 2] + ary[d / 2 - 1]) / 2
    }

    if (expenditure[i + d] >= median * 2) {
      ans++
    }
  }
  return ans
}


console.log(activityNotifications([2, 3, 4, 2, 3, 6, 8, 4, 5], 5))