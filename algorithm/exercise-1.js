function findStringLengthMost(arrString){
    const maxLength =  Math.max(...arrString.map(el => el.length));
    if(maxLength === 0) return false;
    const arrLength = Array(maxLength).fill(0);
    const arrElement = Create2DArray(maxLength);
    arrString.forEach(element => {
        const length = element.length;
        arrLength[length-1]+=1;
        arrElement[length-1].push(element);
    });
    const max = Math.max(...arrLength);
    const index = arrLength.indexOf(max);
    return arrElement[index];
}
function Create2DArray(rows) {
    var arr = [];
    for (var i=0;i<rows;i++) {
       arr[i] = [];
    }
    return arr;
}
let arrString = ['a', 'ab', 'abc', 'cd', 'def', 'gh']
const test = findStringLengthMost(arrString);
console.log(test);