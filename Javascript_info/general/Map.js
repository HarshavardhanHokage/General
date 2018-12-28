let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
console.log(( sumSalaries(salaries) ));

function sumSalaries(sal) {
    let sum = 0;
    for(let salary of Object.values(salaries)) {
        sum += salary;
    }

    return sum;
}
