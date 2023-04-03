const prompt = require("prompt-sync")({signai:true})
let a = prompt("Enter message")
let b = prompt("Enter message")
a = Number.parseInt(a)
b = Number.parseInt(b)
function sum(a,b){
    return a+b;
}
let ans = sum(a,b);
console.log(ans)
