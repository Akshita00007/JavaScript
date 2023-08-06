// ******************* Control Flow in JS **********************

const temperature=41;

if(temperature<50){
    console.log("less than 50");
}
else{
    console.log("greater than 50");
}

// if(2==="2"){
//     console.log("executed");
// }
// <, >, <=, >=, ==, !=, ===, !==

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=true;
const loggedInFromEmail=true;
if(userLoggedIn && debitCard){
    console.log("Allow to access");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("Allow access");
}
// shift+alt+down key

// ********* Switch Case ***************
month=3;
switch(month){
    case 1 : console.log("Jan");
            break;
    case 2 : console.log("Feb");
            break;
    case 3 : console.log("Mar");
            
    case 4 : console.log("Apr");
    break;
            
    default : console.log("default");

    
}

// if a case is matched break is not written so it execute all the code -- except default --
// if break is not written above default

// note --> truthy and falsy values
// falsy values --> false,0,-0, -BigInt, 0n, "", null, undefined, NaN
//truthy values --> "0", "false", " ", [],{}, function(){}
const email="akshita@gmail.com";
if(email){
    console.log("get user email")      // ye wala
}
else{
    console.log("dont have user email")
}

const useremail="";
if(useremail){
    console.log("get user email")      
}
else{
    console.log("dont have user email")   // ye wala
}

const useremail1=" ";
if(useremail1){
    console.log("get user email")      // ye wala -> string ke andar kuch bhi hoga woh truth values hoga
}
else{
    console.log("dont have user email")   
}

// check array
const myArray=["akshita"]
if(myArray.length===0)
{
    console.log("Array is empty");
}
{
    console.log("Array is not empty");
}

//check object
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty")
}

//false == 0 --> true
//false == '' --> true
// 0 == '' --> true


// ********** Nullish Coalescing Operator (??) : null undefined ************
let val1;
val1 =5 ?? 10;
console.log(val1);
val1= null ?? 10;
console.log(val1);
let var1;
var1 =undefined ?? 15;
console.log(var1);
//val1=null ?? 10 ? ? 20; // first value


// Ternary Operator
const iceTeaPrice=100
iceTeaPrice >=80 ? console.log("greater than 80") : console.log("less than 80");