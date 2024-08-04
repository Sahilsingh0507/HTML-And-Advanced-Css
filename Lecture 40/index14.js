const sym1 = Symbol("My identifier");
const sym2 = Symbol("My identifier");

console.log(sym1 === sym2);


const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol();
const k2= Symbol();

myObj = {};
myObj[k1]="Sahil";
myObj[k2]="Rohan";

console.log(myObj);

console.log(myObj[k1]);
console.log(myObj[k2]);

