// its an object  
// promises is for eventual completion of task

// let promise = new Promise(fn, rejct)

let promise = new Promise((resolve, reject) => {
    console.log("Im promise")
    resolve(123)
})

// states in promises
// 1 pending
// 2fullied resolce

// reject