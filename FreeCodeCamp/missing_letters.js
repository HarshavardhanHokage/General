function fearNotLetter(str) {
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    var newString = alphabets.substr(alphabets.indexOf(str.charAt(0)), str.length)

    for(let i = 0; i < newString.length; i++) {
        if(!str.includes(newString[i])) {
            return newString[i];
        }
    }
    return undefined;
  }

  function fearNotLetterAdv(str) {
      for(let i = 1; i < str.length; i++) {
          if((str.charCodeAt(i) - str.charCodeAt(i-1)) > 1) {
              return String.fromCharCode(str.charCodeAt(i) - 1);
          }
      }
  }
  
  console.log(fearNotLetterAdv("abce"));