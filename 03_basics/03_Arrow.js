const user = {
    name : "dhruval" ,
    price : "free",
    welcome : function (){
        console.log(`${this.name} , welcome to the website`);  
        // console.log(this);
    }
}

// user.welcome()
// user.name = "harry"
// user.welcome()
// console.log(this);


// function chai() {
//     console.log(this);
// }
// chai()

const chai = () => {
    console.log(this)
}
// chai()

 // if we are using curly braces we have to user return keywoird so is known as explicit return
const one = (num1 , num2)=>{
    return num1 + num2
}
// console.log(one(5,4))

// this is implicit function where we dont have to use the return keyword to print somthing 
const two = (num3,num4) => (num3 + num4)
// console.log(two(4,5))

//how to return object 

const three = (num5,num6) => ({ name : "dhruval" })
console.log(three(5,4))