let fs = require("fs");
const input = fs.readFileSync("./Luke16/input.txt", 'utf-8').split(/\r?\n/);
let coordinatesBirte;
let crossings = 1;
let direction = 'northEast';

for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
        if (input[y][x] === 'B') {
            coordinatesBirte = {'x': x, 'y':y};
            break;
        }
    }
    if (coordinatesBirte != null) {
        break;
    }
}

for (let x = coordinatesBirte.x; x < input[0].length; x++) {
    if (direction === 'northEast') {
        if (input[coordinatesBirte.y-3][coordinatesBirte.x] === '#'){
            changeDirection();
        }
    } else {
        if (input[coordinatesBirte.y+2][coordinatesBirte.x] === '#') {
            changeDirection();
        }        
    }
    move();
}

function move() {
    if (direction === 'northEast') {
        coordinatesBirte = {'x': coordinatesBirte.x+1, 'y': coordinatesBirte.y-1}
    } else {
        coordinatesBirte = {'x': coordinatesBirte.x+1, 'y': coordinatesBirte.y+1}
    }
    input[coordinatesBirte.y][coordinatesBirte.x] = '/';
    
}

function changeDirection() {
    if (direction === 'northEast') {
        direction = 'southEast';
    } else {
        direction = 'northEast';
    }
    crossings++;
}

console.log('Crossings: ', crossings);