const N = +require('fs').readFileSync(0,'utf-8').toString();
let amountOfFive = Math.floor(N/5);

let change = N - amountOfFive * 5;

while(change%3 !== 0 && amountOfFive > 0){
    amountOfFive--;
    change = N - amountOfFive * 5;
}
let amountOfThree = change % 3 === 0 ? Math.floor(change/3) : -1;
const total = amountOfFive + amountOfThree;
console.log(total);
