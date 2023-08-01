// ************* Objects **************
// There are two ways to create an object -> literal and constructor
// singleton -> when we make object using constructor it is created only one of its kind
// literals se create kiya toh singleton nahi bnta hai literals -> not singleton
//constructor -> singleton

// object literals
// Object.create using constructor
//Object -> key value pair

//*********Symbol ko as object ki keys use karana hai **************** 
//take a symbol and and add it to object keys
const mySym=Symbol("key1")

const JsUser={
    name: "Akshita",
    "full name" :"am",           //cant be accessed by .
    // mySym: "myKey1",             //it wont be converted into symbol
    [mySym] : "myKey1",          //used as symbol
    age: 18,
    location : "Jaipur",
    email : "akshitagoogle.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}

//access objects
console.log(JsUser.email)
console.log(JsUser["email"])     //behind the scene it is string

console.log(JsUser.mySym)        //not used as a symbol
console.log(typeof JsUser.mySym)

console.log(JsUser[mySym])
// console.log(typeof JsUser.mySym)

//change object values
JsUser.email="akshitachatgpt.com"

//freeze -> if you dont want to change values of object 
// Object.freeze(JsUser);
JsUser.email="akshitachatgpt1.com"
console.log(JsUser)


//function in object
JsUser.greeting=function(){
    console.log("Hello JS user")
}

console.log(JsUser.greeting)                 //undefined
console.log(JsUser.greeting())               //as object is freezed we will get an error

//greeting with a name
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`)
}
console.log(JsUser.greetingTwo())  
