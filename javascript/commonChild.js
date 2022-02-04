function commonChild(s1, s2) {
  console.log('s1', s1)
  console.log('s2', s2)
  let max = 0
  // ABCDEF
  // FBDAMN
  // ANS: 2 (BD)

  // can I remove different character first?
  // use loop => max -> min, find it and just return

  // for (let i = 0; i < s1.length; i++) {
  //   for (let j = i; j < s1.length; j++) {
  //     console.log(i, j, s1.slice(i, j + 1))
  //   }
  // }

  for (let i = 0; i < s1.length; i++) {
    // <- s1 start point
    let ary = []
    let count = 0
    let currentIndex = 0

    for (let j = i; j < s1.length; j++) {
      let item = s1[j] // N
      let index = s2.slice(currentIndex).indexOf(item)

      if (index != -1) {
        console.log(
          'i',
          i,
          'j',
          j,
          's1-item',
          item,
          'index',
          index,
          's2-currentIndex',
          currentIndex
        )
        currentIndex = currentIndex + index
        ary.push(item)
        count++
        //console.log("i", i, "j", j, "s1-item", item, "s2-currentIndex", currentIndex)
        // if (i == 3) {
        //   //
        //   console.log("ary", ary)
        // }
      }
    }

    console.log('ary', ary)
    if (count > max) {
      max = count
    }
  }
  return max
}

//console.log(commonChild("ABCDEF", "FBDAMN"))
//console.log(commonChild("SHINCHAN", "NOHARAAA")) // NHA
console.log(commonChild('OUDFRMYMAW', 'AWHYFCCMQX')) // 2

// SHINCHAN
// FBDAMN
console.log(commonChild('HARRY', 'SALLY'))
