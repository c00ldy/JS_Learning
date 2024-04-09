const num = [1,2,3,4,5,6,7,8,9,10]

// const abc = num.map((val)=> val + 10)

const abc = num
               .map((a) => a+10)
               .map((a) => a+1)
               .filter((a)=> a > 15)
console.log(abc);