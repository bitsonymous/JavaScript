// function passed as argument to another function

const sum = (a,b) => {
    console.log(a+b)
}

const print = (a,b,sumCallback) => {
    sumCallback(a,b);
}

print(1,3,sum);




