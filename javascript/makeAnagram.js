  function makeAnagram(a, b) {
    let ori_a = a
    let ori_b = b
    let count = 0

    for (let i = 0; i < ori_a.length; i++) {
      b_idx = b.indexOf(ori_a[i])
      if (b_idx == -1) {
        count++
      } else {
        b = b.slice(0, b_idx) + b.slice(b_idx + 1)
      }
    }

    for (let i = 0; i < ori_b.length; i++) {
      let a_idx = a.indexOf(ori_b[i])
      if (a_idx == -1) {
        count++
      } else {
        a = a.slice(0, a_idx) + a.slice(a_idx + 1)
      }
    }

    return count
  }

  // console.log(makeAnagram("abc", "cde")) // 4
  // console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")) // 30
  // console.log(makeAnagram("showman", "woman")) // 2