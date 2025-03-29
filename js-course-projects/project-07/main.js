const actualYear = new Date() .getFullYear();

let year = 1990;
let result = 0;

do {
    year = parseInt(prompt("What year were you born?"));
} while (year < (actualYear - 150) || year > actualYear);

result = actualYear - year;

alert(`You are ${result} years old`);