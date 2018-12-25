function sumFibs(num) {
    let i = 0;
    let fibCurr = 0;
    let count = 0;
    while(true) {
        fibCurr = fibonacci(i);
        //console.log(fibCurr);
        if(fibCurr > num) {
            return count;
        }
        
        if( fibCurr % 2 === 1) {
            count += fibCurr;
        }
        i++;
        //console.log(`i value ${i} fibCurr value: ${fibCurr} count value: ${count}`);
        
    }
    return count;
  }

  function fibonacci(num) {
    if(num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }

  function sumFibsAdvanced(num) {
      let fibArray = [1,1];
      let nextFib = 0;

      while((nextFib = fibArray[0] + fibArray[1]) <= num) {
          fibArray.unshift(nextFib);
      }
      let count = fibArray.reduce((x, y) => {
          return x + y * (y % 2);                  //When even the mod will return zero and the count stays the same
      }, 0);
      return count;
  }
  
  console.log(sumFibsAdvanced(1000));