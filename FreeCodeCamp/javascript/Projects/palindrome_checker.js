function palindrome(str) {
    // Good luck!

    let nonCharRegEx = /\W|_/ig;
    str = str.replace(nonCharRegEx, "").toLowerCase();
    if(str === str.split("").reverse().join("")) {
        return true;
    }
    return false;
}

console.log(palindrome("2_A3*3#A2"));