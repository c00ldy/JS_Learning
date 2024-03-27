let a = ["thod" , "hulk" , "groot"]
let b = ["flash" , "superman" , "batman"]

// a.push(b);
// console.log(a);

// let c = a.concat(b);
// console.log(c);

let d = [...a , ...b]
//console.log(d);

let f = [1,3,4,8,[5,8,9,], 9,10,[10,11,[12,13,5]]]
let g = f.flat(Infinity);
// console.log(g);

// console.log(Array.from("dhruval"))

let name1 = "dhruval"
let name2 = "krunal"
let name3 = "kunjan"

console.log(Array.of(name1 , name2 , name3));