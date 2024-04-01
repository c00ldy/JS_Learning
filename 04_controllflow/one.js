// console.log("controll flow");

// > , < , >= , <= , == , != , === , !===

// if( 3 != 2){
    // console.log("execuited");
// }

// const temprature = 60;
// if (temprature > 50) {
//     console.log("tempratur is high");
// }else{
//     console.log("tempratur is low")
// }

// const score = 300;
// if (score > 200) {
//     const power = "fly";
// }
// console.log(`you are haveing : , ${power}`);

// const selery = 130;

// if (selery < 500) {
    // console.log("is less ther 500");
// } else if (selery < 750) {
    // console.log("is less then 750");
// } else if (selery < 1200) {
    // console.log("is less then 1200")
// } else {
    // console.log("nothing to do");
// }

const userlogin = false;
const userloginfromgoogle = true;
const userloginfrommail = true;
const userloginfromphon = true
{
if (userloginfromgoogle || userloginfrommail || userloginfromphon) {
    console.log("youy can login sucessufully");
}else{
    console.log("check your main box");
}
}

{
if (userlogin && userloginfrommail) {
    console.log("you can login now");
} else {
console.log("you cannot login now");    
}
}