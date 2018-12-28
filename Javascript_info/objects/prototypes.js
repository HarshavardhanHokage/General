let dictionary = Object.create(null);

dictionary.apple = "apple";
dictionary.orange = "orange";

Object.defineProperty(dictionary, 'toString', {
    value: function() {
        let keys = Object.keys(this).toString();
        return keys;
    },
    enumerable: false
});

console.log(dictionary.toString());

//console.log(Object.getOwnPropertyDescriptor(dictionary, apple));