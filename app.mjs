import { default as PI, hello, count } from './simple.mjs';

console.log("Now with MJS");
console.log(hello("General Kenobi"));
console.log(count());
console.log(count());
console.log(count());
console.log(count() + PI);