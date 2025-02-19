const a = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number);
const sum = a[0] + a[1] + a[2];
if(sum !== 180) {
    console.log("Error")
} else {
    const set = new Set(a);
    if(set.size === 1) {
        console.log("Equilateral");
    } else if(set.size === 2) {
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}