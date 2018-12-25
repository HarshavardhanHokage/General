function rot13(str) { // LBH QVQ VG!
    
    let regEx = /[A-Z]/g;
    return str.replace(regEx, (item) => {
       return String.fromCharCode((item.charCodeAt(0) % 26) + 65)
    });
}
  
  // Change the inputs below to test
  console.log(rot13("SERR CVMMN!"));