let triangularNumber = 0;
let triangularAndSquare = 0;

for (let i = 1; i < 1000000; i++) {
    if (isSquareNumber(triangularNumber)) {
        triangularAndSquare++;
    }
    triangularNumber += i;
}

function isSquareNumber(number) {
    let temp = number;
    for (let i = 0; i <= temp.toString().length; i++) {
        if (Math.sqrt(temp) % 1 === 0) {
            return true;
        } else if (number.toString().length > 1 && i < number.toString().length-1) {
            temp = rotateNumber(number, i);
        }
    }
    return false;
}

function rotateNumber(number, times) {
    let numberArray = number.toString().split('');
    for (let i = 0; i <= times; i++) {
        numberArray.push(numberArray.shift());
    }
    let newNumber = '';
    for (let i = 0; i < numberArray.length; i++) {
        newNumber = newNumber.concat(numberArray[i]);
    }
    return parseInt(newNumber, 10);
}
console.log('Number of triangular numbers that are also square: ', triangularAndSquare);