const fs = require("fs");
const availableSheep = fs.readFileSync("C:/Users/lsansn/Desktop/KnowitKodekalender2019/Luke1/dataLuke1.txt").toString('utf-8').split(', ');

let dragonSize = 50;
let daysAlive = 0;
let daysHungryDragon = 0;
let leftoverSheep = 0;
let alive = true;

while (alive) {
    let totalSheep = +availableSheep[daysAlive] + +leftoverSheep; 
    console.log("Total sheep: ", totalSheep, "  Sheep today: ", availableSheep[daysAlive], "  leftovers: ", leftoverSheep, "  Dragon size: ", dragonSize);
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


