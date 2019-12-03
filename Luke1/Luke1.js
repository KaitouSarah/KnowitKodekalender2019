const fs = require("fs");
const availableSheep = fs.readFileSync("./Luke1/dataLuke1.txt", 'utf-8').split(', ').map(Number);

let dragonSize = Number(50);
let daysAlive = Number(0);
let daysHungryDragon = Number(0);
let leftoverSheep = Number(0);
let alive = true;

while (alive) {
    let totalSheep = availableSheep[daysAlive] + leftoverSheep; 
    if (dragonSize <= totalSheep) {
        daysAlive++;
        leftoverSheep = totalSheep - dragonSize;
        dragonSize++;
        daysHungryDragon = 0;
    } else {
        daysHungryDragon++;
        if (daysHungryDragon == "5") {
            alive = false;
            console.log("Days alive: ", daysAlive);
        } else {
            dragonSize--;
            leftoverSheep = 0;
            daysAlive++;
        }
    }
}


