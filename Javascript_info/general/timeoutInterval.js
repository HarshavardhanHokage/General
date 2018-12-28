// let timeout = setTimeout(function() {
//     console.log("Hello");
// }, 3000);

// let interval = setInterval(function() {
//     console.log("Hello");
// }, 3000);

// let count = 0;
// let recursiveTimeout = setTimeout(function name() {
//     if(count >= 0 && count < 5) {
//         console.log("Alert");
//         count++;
//         setTimeout(name, 2000)
//     }
//     else {
//         console.log("Alert cleared");
//         clearTimeout(recursiveTimeout);
//     }
// }, 2000);


let count = 0;
function func() {
    do {
        console.log(count);
        ++count;
    }while(count % 3 !== 0);

    if(count < 15) {
        setTimeout(func, 0);
    }
}
func();