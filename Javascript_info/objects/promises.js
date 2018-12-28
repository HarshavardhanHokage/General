function randomPromise() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => console.log("After10 seconds"), 5000);
        console.log("Next step");
        let num = Math.random() * 10;
        if(num > 5) {
            resolve(num);
        } else {
            reject(new Error("Error value: " +num));
        }
    })
}

for(let i = 0; i < 100; i++) {
    console.log("Hsadasd");
}

let promise = randomPromise();

promise.then((value) => {
    console.log("Success Num:" +value);
}, (error) => {
    console.log(error.message);
});