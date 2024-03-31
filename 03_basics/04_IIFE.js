// immidiatly invoke function expression (IIE)

(
function chai(){
    console.log(`DB connected`);
})();

( (num1) => {
    console.log( num1 * num1 ); 
})(5)