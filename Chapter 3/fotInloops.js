const prompt = require("prompt-sync")({signal: true})
let obj= {
    ravi: 45,
    payal:68,
    ram:66,
    sheeta: 45
}
for(let a in obj){
    console.log("The marks of " + a + " is : " + obj[a] )
}