// // Complete the countTriplets function below.
// function countTriplets(arr, r) {
//   let ans = 0
//   let len = arr.length
//   let map = new Map()

//   for (let item of arr) {
//     map.set(item, (map.get(item) + 1) || 1)
//   }
//   console.log(map)
//   // Map { '1': 1, '2': 2, '4': 1 }

//   for (var [key, value] of map.entries()) {
//     // 1, 1
//     let count = 0
//     let doubleKey = key * r
//     let tribleKey = doubleKey * r

//     if (map.has(doubleKey) && map.has(tribleKey)) {
//       if (r === 1) {
//         // 1 1 1 1 1 1
//         // => count = 4 + 3 + 2 + 1 = 20
//         for (let i = 0; i <= len - 2; i++) {
//           for (let j = i; j > 0; j--) {
//             count += j
//           }
//         }
//       } else {
//         count = value * map.get(doubleKey) * map.get(tribleKey)
//       }
//       ans += count
//     }
//   }

//   console.log(ans)
//   return ans
// }

function countTriplets(arr, r) {
  let triplets = 0
  const count = []
  const pairs = []
  for (let n = 0; n < arr.length; n++) {
    const i = arr[n]
    const ir = i / r
    if (count[i] === undefined) {
      count[i] = 0
      pairs[i] = 0
    }
    if (pairs[ir]) {
      triplets += pairs[ir]
    }
    if (count[ir]) {
      pairs[i] += count[ir]
    }
    count[i]++
  }
  console.log('pairs', pairs)
  console.log('count', count)
  console.log(triplets)
  return triplets
}

//countTriplets([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 1)

// => 161700

function countTriplets(arr, r) {
  let len = arr.length
  let r2 = new Map()
  let r3 = new Map()
  let count = 0

  for (let item of arr) {
    if (r3.has(item)) {
      count += r3.get(item)
    }

    if (r2.has(item)) {
      r3.set(item * r, r3.get(item * r) + r2.get(item))
    }

    r2.set(item * r, r2.get(item * r) + 1)
  }
  return count
}

console.log(countTriplets([1, 1, 1, 1, 1, 1], 1))
