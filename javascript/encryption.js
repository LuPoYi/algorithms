function encryption(s) {
  let ans = ""
  let arr = []
  let sLength = s.length
  let rowsLength = Math.floor(Math.sqrt(sLength)) // 3
  let columnsLength = Math.ceil(Math.sqrt(sLength)) // 4

  if (rowsLength * columnsLength < sLength) {
    rowsLength++
  }

  for (let i = 0; i < columnsLength; i++) {
    arr[i] = []
  }

  for (let i = 0; i < s.length; i++) {
    let mainIndex = i % columnsLength
    arr[mainIndex].push(s[i])
  }

  arr.forEach(item => {
    ans += item.join('') + " "
  })
  console.log(ans)
  return ans
}

console.log(encryption("haveaniceday"))
// => hae and via ecy