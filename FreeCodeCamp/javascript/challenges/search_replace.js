function myReplace(str, before, after) {
    let capsRegex = /^[A-Z]/;
    if(capsRegex.test(before)) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
    }
    return str.replace(before, after);
  }
  
  console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));