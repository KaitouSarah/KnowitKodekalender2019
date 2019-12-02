var water = 0;
var tempWater = 0;
let start = false;

var fs = require("fs");
var textByLine = fs.readFileSync("C:/Users/lsansn/Desktop/KnowitKodekalender2019/Luke2/dataLuke2.txt").toString('utf-8').split(/\r\n|\r|\n/g);

textByLine.forEach(line => {
    tempWater = 0;
    start = false;
    for (var i = 0; i < line.length; i++) {
        var char = line.charAt(i);
        if (char === ' ') {
            if (start) {
                tempWater++;
            }
        } else if (!start) {
            start = true;
        } else {
            water += tempWater;
            tempWater = 0;
        }
    }
});
console.log("Water: " + water);