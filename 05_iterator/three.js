// const arr = [1,2,3,4,5,]
// for (const i of arr) {
//     // console.log(`the number is ${i}`);
// }

// const greet = "hellow brother"

// for (const a of greet) {
//     console.log(`the cherecter is ${a}`);
// }

const map = new Map()
map.set('dhruval',"mevada")
map.set('may',"thadara")
map.set('dhruval',"mevada")
// console.log(map);

for (const [key,value] of map) {
    // console.log(key, ':-' , value);
}

const myobject = {
    game1 : "NFS",
    game2 : "GTAv"
}

for (const [key,value] of myobject) {
    console.log(key, ':-' , value);
    
}