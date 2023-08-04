// ************ Scope in JS ************
let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);

// scope -> {}
// block scope -> scope ke andar wali value bahar nahi jani cahiye
{
    let a1=10
    const b2=20
    var c3=30
}
// console.log(a1);
// console.log(b2);
console.log(c3);            // var -> gives output 30
// var -> value changes where it has been used

let value=10
console.log("Global scope:",value)
if(true){
    value=20
    console.log("Inner:"+value)
}
i=0
console.log(i)

// ************ scope in node and windows ***************
// scope in node is different in console (code environment)
// scope in windowa is different in console (core)