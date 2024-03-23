//stack(premitive) heap(non-premitive)

let myname = "dhruval"
let anothername = myname
anothername="mevada"

console.log(anothername);
console.log(myname);

let userone = {
    email : "somthing@gmail.com",
    upi : "somthing@ybl"
}

let usertwo = userone;

usertwo.email = "new@somthing.com"

console.log(userone);
console.log(usertwo);