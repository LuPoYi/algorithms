// asasd => [a, s, a, s, d, asa, sas]
// aaaa => [a, a, a, a, aa, aa, aa, aaa, aaa, aaaa]

function substrCount(n, s) {
  let count = 0

  for (let i = 0; i <= n; i++) {
    for (let j = i; j < n; j++) {
      let startIndex = i
      let endIndex = j + 1
      let length = endIndex - startIndex
      let subString = s.slice(startIndex, endIndex)

      if ((startIndex + endIndex) % 2 == 0) {
        // should be the same
        if (subString.slice(0, length - 1) == subString.slice(1, length)) {
          count++
        }
      } else {
        // odd - remove middle
        let middleIndex = (length - 1) / 2
        let middleCharacter = subString[middleIndex]
        let subStringWithoutMiddle = subString.slice(0, middleIndex) + subString.slice(middleIndex + 1, length)
        length = length - 1
        if (subStringWithoutMiddle.slice(0, length - 1) == subStringWithoutMiddle.slice(1, length)) {
          count++
        }

        // "bcb" or "aaacaaa" ... -> just break it
        if (length > 2 && middleCharacter != subString.slice(0, 1)) {
          break
        }
      }
    }
  }
  return count
}

console.log(substrCount(5, "asasd"))