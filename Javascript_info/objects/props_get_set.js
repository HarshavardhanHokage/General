let obj = {
    firstName: "John",
    lastName: "Slater",
    get fullname() {
        return this.firstName + " " + this.lastName;
    },
    set fullname(name) {
        [ this.firstName, this.lastName ] = name.split(" ");
    }
}

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.fullname);
obj.fullname = "Jack Reacher";
console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.fullname);