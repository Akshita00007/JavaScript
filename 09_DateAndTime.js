//********************Date and Time in Depth in JS ************************
let myDate=new Date()
console.log(myDate);

console.log(myDate.toString())

console.log(myDate.toISOString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)      //object


let myNewDate=new Date(2023,0,23)      
let myNewDate1=new Date("01-14-2023")
console.log(myNewDate1)
console.log(myNewDate)
console.log(myNewDate.toDateString()) 
console.log(myNewDate.toLocaleString());


// timestap
let timestap=Date.now()
console.log(timestap)

//convert in seconds
console.log(Math.floor(Date.now()/1000))


// 
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())    //as month starts with 0
console.log(myDate.getMonth()+1)
console.log(newDate.getDate())


// summary
// date -> typeof object
// maonth start with 0

