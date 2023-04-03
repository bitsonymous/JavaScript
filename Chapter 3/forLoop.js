const prompt = require("prompt-sync")({singnal: true})
let sum = 0
let n = prompt("Enter number")
n = Number.parseInt(n);
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum)