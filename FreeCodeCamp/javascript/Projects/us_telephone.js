function telephoneCheck(str) {
    // Good luck!
    var regEx = /(\d\d\d)-\d\d\d-\d\d\d\d/g;
    console.log(regEx.test(str));
    return true;
  }
  
  telephoneCheck("5554-555-5555");