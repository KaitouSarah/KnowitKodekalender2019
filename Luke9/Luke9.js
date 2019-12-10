let fs = require("fs");
const numberList = fs.readFileSync("./Luke9/input.txt", 'utf-8').split(/\r\n|\r|\n/g).map(Number);
let sumKrampustall = 0;
for (let i = 0; i < numberList.length; i++) {
    if (isKrampustall(numberList[i])) {
        sumKrampustall = sumKrampustall + numberList[i];
    }
}

console.log('Sum krampustall: ', sumKrampustall);

function isKrampustall(number) {
    let digitArray = (number*number).toString().split('');
    let arrayLength = digitArray.length;
    let a = '';
    let b = '';
    for (let i = 1; i < arrayLength; i++) {
        b = b.concat(digitArray.shift());
        a = digitArrayToNumber(digitArray);
        if (a + +b === number && a != '0' && +b != '0') {
            return true;
        }
    }
    return false;
}

function digitArrayToNumber(array) {
    let number = ''
    for (let i = 0; i < array.length; i++) {
        number = number.concat(array[i]);
    }
    return parseInt(number, 10);
}