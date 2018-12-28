let user = {
    name: "John Smith",
    age: 35
};
let stringify = JSON.stringify(user);
console.log(stringify);

let object = JSON.parse(stringify);
console.log(object);