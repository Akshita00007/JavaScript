// ************* This and Arrow Function ******************
// THIS -> refers to the current context
const user={
    username:"akshita",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);       // current values
    }
}
user.welcomeMessage    // no output
user.welcomeMessage() 

// if username value is changed
user.username="sam"
user.welcomeMessage()               //context -> values

// this
console.log(this)         //current context in node environment -> global object empty {}
                          // current context in browser -> global object window object


// ***************** this inside a fumction ******************
// values 
function one(){
    const username="akshita";
    console.log(this);
    console.log(this.username);          // undefined as we cant use this inside a function
}
one()

// same output as previous
const myFun=function one(){
    const username="akshita";
    console.log(this);
    console.log(this.username);          // undefined as we cant use this inside a function
}
myFun()


// ************** Arrow Function ***********************

// this does not work in arrow function
const chai = () => {
    const username="akshita";
    console.log(this);
    console.log(this.username); 
}
chai()

// Arrow Function
// () => {}
const addTwo=(num1,num2) =>{
    return num1+num2
}
console.log(addTwo(4,5));

// Implicit return 
// if single line statement then don't need to write return
const addThree = (num1,num2,num3) => num1+num2+num3;
console.log(addThree(3,4,5));

// Note : 
// {} likha toh return likhana hi padega 
// () nahi likhna padega return

// () wrapping the single line code in this
const addFour = (num1,num2,num3,num4) => (num1+num2+num3+num4);
console.log(addFour(3,4,5,6));

// returning object in single line code
// const print=()=>{username:"akshita"};     // output undefined
// console.log(print())

const print=()=>({username:"akshita"});     // object
console.log(print())

//
const myArray=[2,3,4,5,6];
// myArray.forEach()
 