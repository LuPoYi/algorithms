// It's working but not good enough

function isValid(s) {
  console.log("s", s)
  let ans = {}

  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    ans[item] = (ans[item] || 0) + 1
  }

  console.log("ans", ans)
  // { a: 2, b: 2, c: 1, d: 1 }

  let prevValue
  let useRemove = false

  for (let i in ans) {
    let currValue = ans[i]
    if (typeof prevValue === "undefined") { prevValue = currValue }

    if (useRemove) {
      if (prevValue != currValue) {
        return "NO"
      }
    } else {
      if (currValue == prevValue) {
        // skip
      } else if (currValue == prevValue + 1) {
        // I am bigger i.g. 2, 2, 3, 2
        useRemove = true
        // prevValue = currValue // dont change
      } else if (currValue == prevValue - 1 || currValue == 1) {
        // I am smaller, i.g. 3, 3, 2, 3
        // keep change preValue except currValue == 1
        useRemove = true
        if (currValue != 1) {
          prevValue = currValue
        }
      } else {
        return "NO"
      }
    }
  }
  return "YES"
}


console.log(isValid("ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"))
console.log(isValid("aabbccddeefghi"))
console.log(isValid("abcdefghhgfedecba"))

