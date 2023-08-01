const score=400
console.log(score)                 //100
const balance=new Number(100)     //number:100
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3))

// precise value cahihye lekin mujhe kitni value pe focus karna hai
// decimal ke pehle priority then decimal ke baad
//23.8986 -> 23.9
//123.8966 -> 124
//1123.8986 -> 1.12e+3

const hundreds=1000000
console.log(hundreds.toLocaleString());    //,  US Standard
console.log(hundreds.toLocaleString('en-IN'));


// max,min,safe integer

// ****************************** Maths *******************************************************
console.log(Math)
console.log(Math.abs((-4)))
console.log(Math.round(4.3))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.2))
console.log(Math.min(4,3,2,2))
console.log(Math.max(8,2,3,4))
console.log(Math.random());     //values lies between 0 and 1
console.log(Math.random()*10)
console.log(Math.random()*10 + 1)  //if value is 0
console.log(Math.floor(Math.random()*10 + 1))    

const min=10
const max=20

//*******************
console.log(Math.floor(Math.random() * (max-min+1) + min)) 

