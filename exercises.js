let arrays = [[1,2,3], [4,5], [6]];

//Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all of the elements of the original arrays
export function flattening(list) {
    //Return a flattened array of all of the arrays using the reduce method
    return list.reduce((previousValue, currentValue) => previousValue.concat(currentValue)) 
}

console.log(flattening(arrays))

export function loop(value, test, update, body) {
    let curValue = value;
    while (test(curValue)) {
        console.log("Iteration, curValue " + curValue);
        console.log("Calling body...");
        body(curValue);
        curValue = update(curValue);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

export function everyLoop(array, test) {
 let curResult = true
 for(let item of array) {
    //console.log(test(item))
    curResult = curResult && test(item)
}
    return curResult
}

export function everySome (array, test) {
    return !array.some((value)=>!test(value))

}

console.log("Should be true")
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log("Should be false")
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log("Should be true")
console.log(everySome([], n => n < 10));
// → true