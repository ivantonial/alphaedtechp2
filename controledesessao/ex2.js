const promiseResponse = new Promise((resolve, reject) => {
    let responseFromServer = false;

    setTimeout(function () {
        if (responseFromServer) {
            resolve("ACEITO!");
        } else {
            reject("REJEITADO");
        }
    }, 2000);
})

promiseResponse.then(result => {
    console.log(result);
}).catch(result =>{
    console.log(result);
})

