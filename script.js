// 1
// Const variables are used for ensuring a variable does not change

// 2
let num = 20;
console.log(num);

// 3
num = 15;
console.log(num);

// 4
num += 7;
// OR: num = num + 7;
console.log(num);

// 5
num--;
console.log(num);

// 6
num = "This is not a number";
console.log(num);

// 7
let blank;
console.log(blank);

// 8
blank = null;
console.log(blank);

// BONUS
// 1
const [quarter, dime, nickel, penny] = [0.25, 0.10, 0.05, 0.01];
console.log(quarter);
console.log(dime);
console.log(nickel);
console.log(penny);

// 2
console.log(quarter, dime, nickel, penny);

// 3
let letters = "qwertyuiop";
console.log(letters);

// 4
console.log(letters[letters.length - 1]);