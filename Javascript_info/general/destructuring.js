// let obec = {
//     width: "wdewada",
//     title: "menu"
// }

// let { title: name} = obec;

// //console.log(w)
// //console.log(h)
// console.log(name)

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let maxSalary = 0;
let maxEmp = "";

for(let [name, salary] of Object.entries(salaries)) {
    if(salary > maxSalary) {
        maxSalary = salary;
        maxEmp = name;
    }
}

console.log(`Name: ${maxEmp} and salary ${maxSalary}`);