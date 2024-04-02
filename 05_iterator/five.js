const coding = ["js" , "py" , "css" , "html" ,"py"]

// coding.forEach( function(val) {
    // console.log(val);
// })

// coding.forEach((value)=>{
// console.log(value);
// })

// function printme(item){
//     console.log(item);
// }

// coding.forEach(printme)

// coding.forEach((item , index , arr)=>{
// console.log(item,index,arr);
// })

let arr = [
    {
        name : "dhruval",
        age : "fifty",
    },
    {
        name : "krunal",
        age : "fourty"
    },
    {
        name : "kunjan",
        age : "sixty"
    },
]

arr.forEach((item)=>{
    console.log(`the name of the student is ${item.name} and the age is ${item.age}` );
})