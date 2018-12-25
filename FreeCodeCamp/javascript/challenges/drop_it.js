function dropElements(arr, func) {
    // Drop them elements.
    let newArr = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])) {
            console.log(arr.splice(i,));
            newArr = arr.slice(i,);
            return newArr;
        }
    }
  }
  
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});