let fs = require("fs");
const input = fs.readFileSync("./Luke11/input.txt", 'utf-8').split('');
let speed = 10703437;

for (let i = 0; i < input.length; i++){
    if (speed < 0) {
        console.log('Km kjørt: ', i);
        break;
    }
    if (input[i] === 'G') { // Gress
        speed -= 27; 
    } else if (input[i] === 'I') { // Is
        let counter = 1;
        speed += 12;
        while (input[i+1] === 'I') {
            i++;
            counter++;
            speed += 12*counter;
        }
    } else if (input[i] === 'A') { // Asfalt
        speed -= 59;
    } else if (input[i] === 'S') { // Skog
        speed -=212;
    } else { // Fjell
        speed -= 70;
        speed += 35;
        i++;
    }
}