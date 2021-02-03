
function findSumOnTopTwo(arrInt) {
    const length = arrInt.length;
    if(length === 0) return false;

    const maxArr = Math.max(...arrInt);

    const index = arrInt.indexOf(maxArr);
    if (index > -1) {
        arrInt.splice(index, 1);
    }

    return maxArr + Math.max(...arrInt);
}

let arrInt = [1, 4, 2, 3, 5];

console.log(findSumOnTopTwo(arrInt));
