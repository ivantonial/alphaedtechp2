const number = process.argv.slice(2)[0];
console.log(number);

const promiseResponse = new Promise((resolve, reject) => {
    
    let responseFromServer = verifyNumber(number);
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
}).catch(result => {
    console.log(result);
})

function verifyNumber(_number) {
    const number = _number;
    const isPrime = ((number) => {
        if (number % 2 !== 0) {
            for (let i = 2; i <= Math.sqrt(number); i++)
                if (number % i === 0) {
                    return false;
                }
        }
        return true;
    })(number);
    return isPrime;
}