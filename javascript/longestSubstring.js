/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  // Store the number of times each letter is encountered
  let mapOfLetters = {}

  const uniqueS = [...new Set(s)]
  for (const item of uniqueS) {
    mapOfLetters[item] = s.split(item).length - 1
  }

  // If the entire string is made up of valid letters, return its full length
  if (Object.values(mapOfLetters).every((val) => val >= k)) return s.length

  let longestSubstringFound = 0
  let currentStart = 0

  for (let i = 0; i < s.length; i++) {
    // If we've reached a breaking point (character that does not appear k times)
    if (mapOfLetters[s[i]] < k) {
      // Find the longest valid substring of the current string, and compare it with the longest found so far
      longestSubstringFound = Math.max(
        longestSubstring(s.slice(currentStart, i), k),
        longestSubstringFound
      )

      // Move onto the next character in the string
      currentStart = i + 1
    }
  }
  // Check if current substring would have been the longest if a breaking point had been encountered
  longestSubstringFound = Math.max(
    longestSubstring(s.slice(currentStart), k),
    longestSubstringFound
  )

  return longestSubstringFound > 1 ? longestSubstringFound : 0
}

console.log('answer', longestSubstring('ababbc', 2)) // 5
console.log('answer', longestSubstring('baaabcb', 3)) // 3 aaa
