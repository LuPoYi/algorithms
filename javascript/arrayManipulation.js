// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
  console.log("n", n, "queries", queries)
  // n 5 queries [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]

  // Normal way: 
  // [1, 200], [2, 400]
  // let arr = Array(n).fill(0);

  // queries.forEach(function(subArray){
  //     var startIndex = subArray[0];
  //     var endIndex = subArray[1];
  //     var value = subArray[2];

  //     for(var i = startIndex; i <= endIndex; i++){
  //         arr[i - 1] += value;
  //     }
  // })

  // return Math.max(...arr)
  // ------------------------------------------------
  // Best Way:

  let arr = Array(n).fill(0);
  let max = 0;

  queries.forEach(([start, end, value]) => {
    arr[start - 1] += value;
    if (end < arr.length) {
      arr[end] -= value;
    }
  });

  arr.reduce((a, b) => {
    const sum = a + b;
    if (sum > max) {
      max = sum;
    }

    return sum;
  })

  return max;
}

ans = arrayManipulation(5, [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]
])
console.log(ans)