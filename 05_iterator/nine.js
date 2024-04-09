const mynum = [1,2,3]

// const  mytotal = mynum.reduce(function(acc,curval){
//   console.log(`acc ${acc} currvalue ${curval}`);
//     return acc + curval
// },0)

// const mytotal = mynum.reduce((acc,curval) => acc+curval ,0 )
// console.log(mytotal);

const cource = [
    {
        courcename : "java script",
        price : 299,
    },
    {
        courcename : "html",
        price : 99,
    },
    {
        courcename : "css",
        price : 199,
    },
    {
        courcename : "eract",
        price : 399,
    },
]

const totalprice = cource.reduce((acc,item)=> acc + item.price ,0)
console.log(totalprice);