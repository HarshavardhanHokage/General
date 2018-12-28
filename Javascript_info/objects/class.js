class Employee {
    constructor(name, dob) {
        this.name = name;
        this.dob = dob;
    }

    greet() {
        console.log("Hello: " +this.name + " age: " +this.age);
    }
}

let emp1 = new Employee("Drake", "29-12-2121");

emp1.age = 20;

emp1.greet();