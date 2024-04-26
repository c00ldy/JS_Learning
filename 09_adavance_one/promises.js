// new Promise(function(resolve,reject){
// setTimeout(function(){
//     console.log("asyink task 2");
//     resolve()
// },1000)
// }).then(function() {
//     console.log("asynk 3");
// })

// const promis = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         console.log("dhruval");
//         resolve({username : "dhruval" , email : "dhruval@mail.co"})
//     },1000)
// })

// promis.then(function(user){
// console.log(user);
// })

// const promisfour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username : "maythadar" , mail : "somthing@mail.in"})
//         }else{
//             reject("ERROR : Somthihg went wrong")
//         }
//     },1000)
// })

// promisfour.then((user) =>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(() => {
//     console.log("finnalyits done");
// })

const promisfive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ user: "may", Id: "26745r" });
    } else {
        reject('ERROR : error is happening')
    }
  }, 1000);
});

async function forthepromic(){
try {
    const responce = await promisfive
    console.log(responce);
} catch (error) {
    console.log(error);
}
}

forthepromic();