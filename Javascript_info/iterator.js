let elem = {
    start: 1,
    end: 10
};

// elem[Symbol.iterator] = function() {
//     return {
//         current: this.start,
//         limit: this.end,
//         next() {
//             if(this.current <= this.limit) {
//                 return { done: false, value: this.current++ }
//             } else {
//                 return { done: true}
//             }
//         }
//     }
// }

// for(let i of elem)  {
//     console.log(i);
// }

console.log(Array.from(elem));