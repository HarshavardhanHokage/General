function whatIsInAName(collection, source) {
    // What's in a name?
   var keys = Object.keys(source);

   let arr = collection.filter((item) => {
       for(let i = 0; i < keys.length; i++) {
           if(!item.hasOwnProperty(keys[i]) || item[keys[i]] !== source[keys[i]]) {
               return false;
           }
       }
       return true;
   });

   return arr;
  }
  
  whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 });