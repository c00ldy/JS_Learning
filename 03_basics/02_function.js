///if only one item ther in cart 

function calculatecartprice (num1){
    return num1
}

// console.log(calculatecartprice(5));

//what id there are many item

function manyitem (...num2){
    return num2
}

// console.log(manyitem(5,25,12,45,25));

const detail = {
  name : "dhruval",
    age : 19,
}

function newobh(anyobject) {
    // console.log(`the name is ${anyobject.name} and the age is ${anyobject.age}`);
}

// newobh(detail)
newobh({
    name :"hard",
    age : 18,
})

const mynewarray = [100,200,300,400]
function printsecondvalue(myarr) {
    return myarr[2]
}

console.log(printsecondvalue(mynewarray));