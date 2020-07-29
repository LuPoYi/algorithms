// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
  // give me one grand today night < magzine
  // give one grand today < bad guy

  let is_ok = true

  for (let i = 0; i < note.length; i++) {
    let index = magazine.indexOf(note[i])
    magazine.splice(index, 1)
    if (index == -1) {
      is_ok = false;
      break;
    }
  }

  return is_ok ? "Yes" : "No"
}

console.log(checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']
))