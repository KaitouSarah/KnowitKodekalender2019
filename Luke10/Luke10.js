let fs = require("fs");
const input = fs.readFileSync("./Luke10/input.txt", 'utf-8').split(/\r?\n/);
let tannkremArray = new Array();
let sjampoArray = new Array();
let toalettpapirArray = new Array();
let toalettpapir = 0;
let sjampo = 0;
let tannkrem = 0;
let toalettpapirOnsdager = 0;
let sjampoSondager = 0;
let answer;

for(let i = 0; i < input.length-1; i+=4) {
    let firstLine = input[i+1].split(' ');
    let secondLine = input[i+2].split(' ');
    let thirdLine = input[i+3].split(' ');

    if (firstLine[3] === 'tannkrem') {
        tannkremArray.push(firstLine);
    } else if (firstLine[3] === 'sjampo') {
        sjampoArray.push(firstLine);
    } else {
        toalettpapirArray.push(firstLine)
    }
    if (secondLine[3] === 'tannkrem') {
        tannkremArray.push(secondLine);
    } else if (secondLine[3] === 'sjampo') {
        sjampoArray.push(secondLine);
    } else {
        toalettpapirArray.push(secondLine)
    }
    if (thirdLine[3] === 'tannkrem') {
        tannkremArray.push(thirdLine);
    } else if (thirdLine[3] === 'sjampo') {
        sjampoArray.push(thirdLine);
    } else {
        toalettpapirArray.push(thirdLine)
    }
}

for (let i = 0; i < sjampoArray.length; i++) {
    tannkrem = tannkrem + parseInt(tannkremArray[i][1],10);
    sjampo = sjampo + parseInt(sjampoArray[i][1], 10);
    toalettpapir = toalettpapir + parseInt(toalettpapirArray[i][1], 10);

}
for (let i = 6; i < sjampoArray.length; i+=7) {
    sjampoSondager = sjampoSondager + parseInt(sjampoArray[i][1]);
   
}
for (let i = 2; i < toalettpapirArray.length; i+=7) {
    toalettpapirOnsdager = toalettpapirOnsdager + parseInt(toalettpapirArray[i][1]);
}

answer = Math.floor(tannkrem/125) * Math.floor(sjampo/300) * Math.floor(toalettpapir/25) * sjampoSondager * toalettpapirOnsdager;
console.log('Product/Answer: ', answer);

