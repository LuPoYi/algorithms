function ranomlyRecorderArray(arr) {
  let len = arr.length
  for (let index in arr) {
    let tragetIndex = Math.round(Math.random() * (len - 1))
    if (index != tragetIndex) {
      [arr[index], arr[tragetIndex]] = [arr[tragetIndex], arr[index]]
    }
  }

  return arr
}

console.log(ranomlyRecorderArray([1, 0, 3, 9, 2]))

