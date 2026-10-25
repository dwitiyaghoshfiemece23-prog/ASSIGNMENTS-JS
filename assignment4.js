console.log("-- Multiplication Table of 5 --");

for (let i = 1; i <= 5; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("\n-- First number > 10 divisible by 6 --");

let num = 11;

while (true) {
    if (num > 10 && num % 6 === 0) {
        console.log("Found: " + num);
        break;
    }

    num++;
}

console.log("\n-- Numbers from 1 to 10, skipping multiples of 3 --");

let j = 0;

do {
    j++;

    if (j % 3 === 0) {
        continue;
    }

    console.log(j);

} while (j < 10);
