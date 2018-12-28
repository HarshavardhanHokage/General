// function add(a, b) {
//     return a + b;
// }

// function decorator(func) {
//     let wrapper = function(...args){
//         wrapper.calls.push(args);
//         //console.log(args[0]);
//         return func.apply(this, [args[0], args[1]]);
//     }

//     wrapper.calls = [];
//     return wrapper;
// }

// wrapps = decorator(add);

// console.log(wrapps(2,3));
// console.log(wrapps(4,5));

// console.log(wrapps.calls);

function f(x) {
    console.log(x);
}

function decorator(func) {
    function wrapper(...args) {
        setTimeout(func.bind(this, args[0]), args[1]);
    }

    return wrapper;
}

let timeBomb = decorator(f);

timeBomb(10, 3000);