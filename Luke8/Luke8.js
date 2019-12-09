let hjul0 = new Array (pluss101, opp7, minus9, pluss101, 0);
let hjul1 = new Array (trekk1fraodde, minus1, minus9, pluss1tilpar, 0);
let hjul2 = new Array (pluss1tilpar, pluss4, pluss101, minus9, 0);
let hjul3 = new Array (minus9, pluss101, trekk1fraodde, minus1, 0);
let hjul4 = new Array (roterodde, minus1, pluss4, roteralle, 0);
let hjul5 = new Array (gangemsd, pluss4, minus9, stop, 0);
let hjul6 = new Array (minus1, pluss4, minus9, pluss101, 0);
let hjul7 = new Array (pluss1tilpar, minus9, trekk1fraodde, delemsd, 0);
let hjul8 = new Array (pluss101, reversersiffer, minus1, roterpar, 0);
let hjul9 = new Array (pluss4, gangemsd, reversersiffer, minus9, 0);

let alleHjul = new Array(hjul0, hjul1, hjul2, hjul3, hjul4, hjul5, hjul6, hjul7, hjul8, hjul9);

let finished = false;
let storsteSum = 0;
for (let i = 0; i <= 10; i++) {
    let sum = i;
    while (!finished) {
        let currentWheelIndex = parseInt(sum.toString().split('').pop(), 10);
        let currentWheel = alleHjul[currentWheelIndex];
        let currentWheelPosition = currentWheel[4];
        let currentMethod = currentWheel[currentWheelPosition];
        if (currentMethod.name === 'stop' || currentMethod.name === 'roterpar' || currentMethod.name === 'roterodde' || currentMethod.name === 'roteralle') {
            currentMethod();
        } else {
            sum = currentMethod(sum);
        }
        roterhjul(currentWheelIndex);
    } 
    if (sum > storsteSum) {
        storsteSum = sum;
    }
    resethjul();
    finished = false;

}
console.log('Største mulige sum på ett spill med opptil 10 mynter er ', storsteSum);

function pluss101(number) {
    return number+101;
}

function pluss4(number) {
    return number+4;
}
function minus9(number) {
    return number-9;
}
function minus1(number) {
    return number-1;
}
function reversersiffer(number) {
    let numberArray = number.toString().split('');
    let reverseString = '';
    for (let i = numberArray.length-1; i >= 0; i--) {
        reverseString = reverseString.concat(numberArray[i]);
    }
    return parseInt(reverseString, 10);
}
function opp7(number) {
    let numberArray = number.toString().split('');
    while (numberArray[numberArray.length-1] != 7) {
        number++;
        numberArray = number.toString().split('');
    }
    
    return number;
}
function gangemsd(number) {
    let numberArray = number.toString().split('');
    if (number > 0) {
        return number*parseInt(numberArray[0], 10);    x
    } else {
        return number*parseInt(numberArray[1], 10);
    }
}
function delemsd(number) {
    let numberArray = number.toString().split('');
    return Math.floor(number/parseInt(numberArray[0], 10));

}
function pluss1tilpar(number) {
    let numberArray = number.toString().split('');
    let newNumber = '';
    if (number > 0) {
        for (let i = 0; i < numberArray.length; i++) {
            let currentNumber = parseInt(numberArray[i], 10);
            if (currentNumber % 2 === 0) {
                newNumber = newNumber.concat(currentNumber+1);
            } else {
                newNumber = newNumber.concat(currentNumber);
            }
        }
        return parseInt(newNumber, 10);
    } else {
        for (let i = 1; i < numberArray.length; i++) {
            let currentNumber = parseInt(numberArray[i], 10);
            if (currentNumber % 2 === 0) {
                newNumber = newNumber.concat(currentNumber+1);
            } else {
                newNumber = newNumber.concat(currentNumber);
            }
        }
        return newNumber*-1;
    }
}
function trekk1fraodde(number) {
    let numberArray = number.toString().split('');
    let newNumber = '';
    if (number >= 0) {
        for (let i = 0; i < numberArray.length; i++) {
            let currentNumber = parseInt(numberArray[i], 10);
            if (currentNumber % 2 === 1) {
                newNumber = newNumber.concat(currentNumber-1);
            } else {
                newNumber = newNumber.concat(currentNumber);
            }
        }
        return parseInt(newNumber, 10);
    } else {
        for (let i = 1; i < numberArray.length; i++) {
            let currentNumber = parseInt(numberArray[i], 10);
            if (currentNumber % 2 === 1) {
                newNumber = newNumber.concat(currentNumber-1);
            } else {
                newNumber = newNumber.concat(currentNumber);
            }
        }
        return parseInt(newNumber*-1, 10);
    }
}
function roterodde() {
    roterhjul(1);
    roterhjul(3);
    roterhjul(5);
    roterhjul(7);
    roterhjul(9);
    return;
}
function roterpar() {
    roterhjul(0);
    roterhjul(2);
    roterhjul(4);
    roterhjul(6);
    roterhjul(8);
    return;
}
function roteralle() {
    roterpar();
    roterodde();
    return;
}
function roterhjul(number) {
    if (number === 0) {
        if (hjul0[4] < 3) {
            hjul0[4]++;
        } else {
            hjul0[4] = 0;
        }
    } else if (number === 1) {
        if (hjul1[4] < 3) {
            hjul1[4]++;
        } else {
            hjul1[4] = 0;
        }
    } else if (number === 2) {
        if (hjul2[4] < 3) {
            hjul2[4]++;
        } else {
            hjul2[4] = 0;
        }
    } else if (number === 3) {
        if (hjul3[4] < 3) {
            hjul3[4]++;
        } else {
            hjul3[4] = 0;
        }
    } else if (number === 4) {
        if (hjul4[4] < 3) {
            hjul4[4]++;
        } else {
            hjul4[4] = 0;
        }
    } else if (number === 5) {
        if (hjul5[4] < 3) {
            hjul5[4]++;
        } else {
            hjul5[4] = 0;
        }
    } else if (number === 6) {
        if (hjul6[4] < 3) {
            hjul6[4]++;
        } else {
            hjul6[4] = 0;
        }
    } else if (number === 7) {
        if (hjul7[4] < 3) {
            hjul7[4]++;
        } else {
            hjul7[4] = 0;
        }
    } else if (number === 8) {
        if (hjul8[4] < 3) {
            hjul8[4]++;
        } else {
            hjul8[4] = 0;
        }
    } else if (number === 9) {
        if (hjul9[4] < 3) {
            hjul9[4]++;
        } else {
            hjul9[4] = 0;
        }
    }
    return;
}
function resethjul() {
    hjul0[4] = 0;
    hjul1[4] = 0;
    hjul2[4] = 0;
    hjul3[4] = 0;
    hjul4[4] = 0;
    hjul5[4] = 0;
    hjul6[4] = 0;
    hjul7[4] = 0;
    hjul8[4] = 0;
    hjul9[4] = 0;
    return;
}
function stop() {
    finished = true;
    return false;
}