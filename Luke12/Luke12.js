let counterMagicNumbers = 0;

for (let i = 1000; i < 9999; i++) {
    let temp = i;
    for (let j = 0; j < 7; j++) {
        if (validNumber(temp)) {
            temp = sortAndSubtract(temp);
            if (temp === 6174) {
                if (j === 6) {
                    counterMagicNumbers++;
                } else {
                    break;
                }
            }    
        } else {
            break;
        }
    }    
}
console.log('Magic numbers: ', counterMagicNumbers);

//Sort the digits in the number in one ascending and one descending number, 
//then returns sum of descending number minus ascending number.
function sortAndSubtract(number) {
    let splitNumber = number.toString().split('');
    let highToLowArray = new Array();
    let lowToHighArray = new Array();
    let highToLowNumber = '';
    let lowToHighNumber = '';
    for (let i = 0; i < splitNumber.length; i++) {
        lowToHighArray.push(parseInt(splitNumber[i], 10));
        highToLowArray.push(parseInt(splitNumber[i], 10));
    }
    lowToHighArray.sort((a, b) => a - b);
    highToLowArray.sort((a, b) => b - a);

    for (let i = 0; i < lowToHighArray.length; i++) {
        highToLowNumber = highToLowNumber.concat(highToLowArray[i]);
        lowToHighNumber = lowToHighNumber.concat(lowToHighArray[i]);
    }
    highToLowNumber = parseInt(highToLowNumber, 10);
    lowToHighNumber = parseInt(lowToHighNumber, 10);
    return highToLowNumber - lowToHighNumber;
}

//Checks that number has at least two uniqe digits 
function validNumber (number) {
    let splitNumber = number.toString().split('');
    for (let i = 1; i < splitNumber.length; i++) {
        if (splitNumber[i] != splitNumber[i-1]) {
            return true;
        }
    }
    return false;
}

