function addTogether() {
    
    let arr = [...arguments];
    if(arr.length >= 2) {
        if(typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
            return undefined;
        }
        else {
            return arr[0] + arr[1];
        }
    } else {
        if(typeof arr[0] !== 'number') {
            return undefined;
        }
        else {
            let a = arr[0];
            return function(b) {
                if(typeof b !== 'number') {
                    return undefined;
                }
                return a+b;
            }
        }
    }
}
  
  console.log(addTogether(2)([3]));