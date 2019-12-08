const someNumber = 27644437;
let z;

for (let i = 2; i < someNumber; i++) {
    let temp = i * 7;
    let rest = temp%someNumber;
    while (rest < 0) {
        rest = (temp+someNumber)%someNumber;
    }
    if (rest === 1) {
        z = 5897 * i;
        break;
    }
}

let code = z%someNumber;
while (code < 0) {
    code = (z+someNumber)%someNumber;
}

console.log('Koden: ', z % someNumber);