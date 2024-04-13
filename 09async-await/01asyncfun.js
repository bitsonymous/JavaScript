async function hello(){
 console.log("hello")
}

// await = paauses the exucation of surrounding asunc function 

// we can only use in async funcyion 
// console.log("hello")

function api(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("success");
        }, 2000);
    });
}

async function getWeather(){
    await api();
}
async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
}
 function getData(dataId){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
 }
