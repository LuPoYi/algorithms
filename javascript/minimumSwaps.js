// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let ans = []
    let count = 0
    let value = 0
    let len = arr.length

    while(len != value){
        value = value + 1
        if(arr[0] == value){
            arr.shift()
        }else{
            arr[arr.indexOf(value)] = arr[0] // < key
            arr.shift()
            count = count + 1
        }
    }


    // for(let i = 0; i < arr.length; i++){
    //     let item = i + 1
    //     if(arr[i] != item){
    //         var index = arr.slice(i, arr.length).indexOf(item) + i;
    //         [arr[i], arr[index]] = [arr[index], arr[i]]
    //         count++
    //     }
    // }
    return count
}

console.log(minimumSwaps([2,3,4,1,5]))