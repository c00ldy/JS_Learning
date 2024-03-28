// const tinder = new Object()  this is single term object
// const tinder = {}  this is non singlke term object

const tinder = {}
tinder.name = "dhruval"
tinder.age = "18"
tinder.zender = "male"

// console.log(tinder);

let b = {
    name : "sakshi",
    fullname :{
                firstname:"sakshi",
                lastname: "rajyaguru",
                fathername : {
                    firstname : "maheshbhai",
                    lastname : "rajyaguru",
                }
            }

}

// console.log(b.fullname.fathername.firstname);

const obj1 = {
    1 : "a",
    2 : "b",
}
const obj2 = {
    3 : "a",
    4 : "b",
}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign( {} , obj1 , obj2)
const obj3 = { ...obj1 , ...obj2 }
// console.log(obj3);

// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));
// console.log(Object.entries(tinder));

// console.log(tinder.hasOwnProperty('name'));