function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                console.log("i =>" +i);
                console.log("j =>" +j);
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function sumPrimes(num) {
    let primes = getPrimes(num);
    return primes.reduce((acc, curr) => acc + curr);;
  }
  
  console.log(sumPrimes(977));