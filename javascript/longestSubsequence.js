function longestSubseq(s1, s2) {
  let s1Array = [...s1]
  let s2Array = [...s2]

  for (let [item, index] of s1Array) {
    let s2Index = s2.indexOf(item)
    if (s2Index != -1) {
    }
  }
}

// s1 item: A
//

console.log(longestSubseq('ABAZDC', 'BACBAD'))
