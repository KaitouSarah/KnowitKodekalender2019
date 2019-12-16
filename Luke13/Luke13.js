let fs = require("fs");
const input = fs.readFileSync("./Luke13/input.txt", 'utf-8').split(',');
let coordinate = {x: 0, y: 0, top: true, left: true, bottom: false , right: false};

for (let i = 0; i < 10; i ++) {
    console.log(input[i]);
}