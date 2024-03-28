//object litral 

let mysymb = Symbol("dh")

const user = {
    name : "dhruval",
    "full name " : "dhruval mevada",
    [mysymb] : "dh",
    email : "work.dhruvalmevada@gmail.com",
    id : "2"
}

// console.log(user.name);
// console.log(user.mysymb)

user.email = "somthing.dhruval@miil.com"
// console.log(user);
// Object.freeze(user)
// user.name = "maythadar"

user.greetings = function(){
    console.log("hello js user");
}


user.greetingstwo = function(){
    console.log(`hello js user , ${this.name}`);
}


console.log(user.greetings());
console.log(user.greetingstwo());