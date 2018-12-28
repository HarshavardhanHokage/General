let obj = {
    name: "Brock"
}

Object.defineProperty(obj, 'name', {
    value: 'Lesner',
    writable: false,
    enumerable: true,
    configurable: false
});

Object.defineProperty(obj, 'name', {
    writable: true
});

//obj.name = "Drake";
//delete obj.name;
console.log(obj);
