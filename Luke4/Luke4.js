let currentX = 0;
let currentY = 0;
let newX = 0;
let newY = 0;
let coordinates = new Array();
let minutesCounter= 0;

const map = Array(1000)
  .fill(true)
  .map(() => Array(1000).fill(0));

let csv = require('fast-csv');

csv.fromPath('./Luke4/dataLuke4.csv')
  .on('data', function(data) {
    coordinates.push(data);
})
  .on('end', function() {
    for (let i = 1; i < coordinates.length; i++) {
        newX = Number(coordinates[i][0]);
        newY = Number(coordinates[i][1]);
        if (newX !== currentX) {
            if (newX > currentX) { 
                for (let x = currentX; x < newX; x++) {
                    minutesCounter += (1 + map[x][currentY]);
                    map[x][currentY]++;
                }
            } else {                  
                for (let x = currentX; x > newX; x--) {
                    minutesCounter += (1 + map [x][currentY]);
                    map[x][currentY]++;
                }
            }
            currentX = newX;
        }
        if (newY !== currentY) {
            if (newY > currentY) { 
                for (let y = currentY; y < newY; y++) {
                    minutesCounter += (1 + map[currentX][y]);
                    map[currentX][y]++;
                }
            } else {                  
                for (let y = currentY; y > newY; y--) {
                    minutesCounter += (1 + map [currentX][y]);
                    map[currentX][y]++;
                }
            }
            currentY = newY;
        }
    }
    console.log("Minutes: ", minutesCounter);
  });
