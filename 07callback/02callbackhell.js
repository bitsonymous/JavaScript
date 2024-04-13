function getData(dataID, getNextData){

    setTimeout(() => {
        console.log("data", dataID)
        if(getNextData){
            getNextData()
        }
    }, 2000);
    
}

// getData(2) //2s
// getData(4) //2s
// getData(6) //2s

getData(1, () =>{
    getData(2, ()=> {
        getData(3, () => {
            getData(4)
        })
    })
} )

// above is call back hell
// to tackle this we use prmomises