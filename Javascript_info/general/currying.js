function log(date) {
    console.log("Date");
    return function(type) {
        console.log("Type");
        return function(msg) {
            console.log("Message");
            return `[${date}]: [${type}] => ${msg}`
        }
    }
}

//console.log(log(new Date())("Debug")("Error in array processing"));

let todaysLog = log(new Date());
let debugLog = todaysLog("DEBUG");
let infoLog = todaysLog("INFO");

let count = 0;
while(count < 15) {
    let random = Math.floor((Math.random() * (1 - 0 + 1)) + 0);
    console.log(random);
    if(random) {
        console.log(debugLog("Error in Process"));
    } else {
        console.log(infoLog("Process works fine"));
    }
    count++;
}