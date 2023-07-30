// the way in which data is stored an accessed in memory on this basis we can divide datatypes in two 
// primitive and non-primitive

// 1. primitive datatypes
// these are of 7 types
// these are call by value changes are in copy

// string, number, boolean, null, undefined, symbol, BigInt
// symbol: kisi bhi value ko unique karne ke use mai aate hai

const score=100           
const scoreValue=100.3

const loggedIn=false
const temperature=null
let userEmail1
let userEmail=undefined     //correct

const id=Symbol('123')
const anotherId=Symbol('123')   
console.log(id===anotherId)         //as return values are different

const bigNumber=3896369887543n      //bigInt represent n at end
console.log(bigNumber)

// Is javascipt dynamically typed or statically typed
// javascript is dynamically typed we don't define language in js

// 2. reference (Non-primitive)
// Arrays, Objects, Functions       
const heros=["a","b","c","d"]

let myObj={
    name:"Akshita",
    age:22,
}

const myFunction=function(){
    console.log("Hello world");

}

console.log(typeof bigNumber)
console.log(typeof temperature)      //object
console.log(myFunction)
console.log(typeof id)

// null -> object
// undefined -> undefined
// boolean -> boolean
// number -> number
// string -> string
// object -> object
// function -> function (object function)
// symbol -> symbol



