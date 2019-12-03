const fs = require("fs");
const imageBits = fs.readFileSync("./Luke3/dataLuke3.txt", 'utf-8');

for (let y = 500; y < 1442; y++) {
    for (let x = 1442; x > 500; x--) {
        if (+x * +y === 720720) {
            let details = 'X: ' + x + ' Y: ' + y + '\n';
            fs.appendFileSync('./Luke3/outputLuke3.txt', details);
            imageBits.match(new RegExp(`.{${x}}`, 'g')).forEach( part => {
                fs.appendFileSync('./Luke3/outputLuke3.txt', part);
                fs.appendFileSync('./Luke3/outputLuke3.txt', '\n');

            })
            fs.appendFileSync('./Luke3/outputLuke3.txt', '\n');
        }
    }
}