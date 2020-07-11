// Pet -> Pet
// Pet<Dog> -> [Pet, Dog]
// Pet<Dog, Cat> => [Pet, Dog, Cat]
// Pet<Dog<Red>> -> [Pet, [Dog, Red]]
// Pet<Dog, Cat<RedCat>> -> [Pet, Dog, [Cat, RedCat]]
console.log('START')

const resolveJavaType = (symbol) => {

  firstIndex = symbol.indexOf("<")
  lastIndex = symbol.lastIndexOf(">")

  if (firstIndex == -1) {
    return symbol.replace(/\s/g, '');
  }

  let arr = []

  className = symbol.slice(0, firstIndex)
  arr.push(className.replace(/\s/g, ''));

  subClasses = symbol.slice(firstIndex + 1, lastIndex)
  subClasses.split(',').forEach(function (item) {
    if (item.indexOf("<") != -1) {
      arr.push(resolveJavaType(item))
    } else {
      arr.push(item.replace(/\s/g, ''));
    }
  });

  return arr
}


console.log("Pet")
console.log(resolveJavaType("Pet"))
console.log("Pet<Dog>")
console.log(resolveJavaType("Pet<Dog>"))
console.log("Pet<Dog, Cat>")
console.log(resolveJavaType("Pet<Dog, Cat>"))
console.log("Pet<Dog<Red>>")
console.log(resolveJavaType("Pet<Dog<Red>>"))
console.log("Pet<Dog, Cat<RedCat>>")
console.log(resolveJavaType("Pet<Dog, Cat<RedCat>>"))
// resolveJavaType("Pet<Dog, Cat<RedCat, BlueCat>>") => fail


console.log('END')