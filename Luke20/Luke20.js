let allElves = new Array(
    {'name': 'elf1', 'steps': 1, 'position': 0}, 
    {'name': 'elf2', 'steps': 0, 'position': 1}, 
    {'name': 'elf3', 'steps': 0, 'position': 2}, 
    {'name': 'elf4', 'steps': 0, 'position': 3}, 
    {'name': 'elf5', 'steps': 0, 'position': 4}
);
let rotation = 'right';
let currentElf = 0;

for (let i = 2; i <= 1000740; i ++) {
    if (conditionOne(i)) {
        currentElf = doneFewestSteps().position 
        allElves[currentElf].steps+=1;
    } else if (conditionTwo(i)) {
        currentElf = nextElf();
        allElves[currentElf].steps+=1;
    } else if (conditionThree(i)) {
        currentElf = nextElf();
        currentElf = nextElf();
        allElves[currentElf].steps+=1;
    } else if (conditionFour(i)) {
        currentElf = 4;
        allElves[currentElf].steps+=1;
    } else {
        currentElf = nextElf();
        allElves[currentElf].steps +=1;
    }
}

console.log('The difference between most and fewest task done is ', 
    allElves[doneMostSteps().position].steps - allElves[doneFewestSteps().position].steps);

// Check prime
function conditionOne(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    if (!doneFewestSteps()) {
        return false;
    }
    return num > 1;
}

// Divisible by 28
function conditionTwo(num) {
    if (num % 28 === 0) {
        if (rotation === 'right') {
            rotation = 'left';
        } else {
            rotation = 'right';
        }
        return true;
    }
    return false;
}

// Even number and next elf has done most steps
function conditionThree(num) {
    if (num % 2 === 0) {
        if (doneMostSteps() === allElves[nextElf()]) {
            return true;
        }
    }
    return false
}

// Divisible
function conditionFour(num) {
    if (num % 7 === 0) {
        return true;
    }
    return false;
}

// Returns the elf that has done most steps at this point
function doneMostSteps() {
    let mostStepsDone = allElves.reduce((max, elf) => max.steps > elf.steps ? max : elf);
    let counter = 0;
    for (let i = 0; i < allElves.length; i++) {
        if (allElves[i].steps === mostStepsDone.steps) {
            counter++;
        }
        if (counter > 1) {
            return false;
        }
    }
    return mostStepsDone;
}

// Returns the elf that has done fewest steps at this point
function doneFewestSteps() {
    let fewestStepsDone = allElves.reduce((min, elf) => min.steps < elf.steps ? min : elf);
    let counter = 0;
    for (let i = 0; i < allElves.length; i++) {
        if (allElves[i].steps === fewestStepsDone.steps) {
            counter++;
        }
        if (counter > 1) {
            return false;
        }
    }
    return fewestStepsDone;
}

// Return index of the next elf in line
function nextElf() {
    if (rotation === 'right') {
        if (currentElf === 4) {
            return 0;
        }
        return currentElf+1;    
    } else {
        if (currentElf === 0) {
            return 4;
        }
        return currentElf-1;
    }
}
