function translatePigLatin(str) {
    //console.log(str.match());
    let regEx = /^[aeiou]/i;
    let regEx2 = /[^aeiou]+/;
    let regEx3 = /[aeiou]+/gi;
    //console.log(str.match(regEx2));
    //console.log(regEx.test(str));
//    console.log(!regEx3.test(str));
    if(regEx.test(str)) {
        return str + "way";
    }
    else if(!regEx3.test(str)){
        console.log("adasd")
        return str + "ay";
    }
    else {
        let match = str.match(regEx2);
        return str.replace(match, "") + match + "ay";   
    }
  }
  
  console.log(translatePigLatin("ccccclllassllsay"));