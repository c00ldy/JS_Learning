const name = "dhruval";
const age = "50";

// console.log(name + age );

// console.log(`heloo my name is ${name} and age is ${age}`);

let a = new String(`mevada`);
console.log(a[1]);
// console.log(a.__proto__);
// console.log(a.toUpperCase());
// console.log(a.charAt(2));
// console.log(a.indexOf('v'));


const newstring = a.substring(0,4);
// console.log(newstring);


const anotherstring = a.slice(-5 , 3);
// console.log(anotherstring);


let newone = "    dhruval    "
// console.log(newone);
// console.log(newone.trim());

let b = "https://dhruval.com/abcd20%sgasytkfe"
// console.log(b.replace('20%','_'));
// console.log(b.includes('dhruval'));
// console.log(b.includes('abcde'));


let c = "dhruval mevada mahesh bhai";
console.log(c.split(' '));