function myfirstname (){
    console.log("d");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("v");
    console.log("a");
    console.log("l");
}
// myfirstname()

function addition (num1 , num2) {
    // console.log(num1+num2);
    let result = num1 + num2;
    return result
}

let b = addition(3,5)
// console.log("result : ",b);

// addition(3,null)
// console.log(typeof addition)

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter the name");
        return
    }
return`${username} just logged in`
}

// let d = loginusermessage("dhruval")
// console.log(d);
console.log(loginusermessage());