let score=33
//we dont know the value is it number or something else

//in two ways we can write
console.log(typeof(score))
console.log(typeof score)

score="33"
console.log(typeof score)

//note it should be in capital
// converting string to number
let valueInNumber=Number(score)
console.log(typeof valueInNumber)


//if it contains alphabets
score="33abc"
let valueInNumber1=Number(score)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)

// Summary
//no to convert => value
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// converting number to boolean value
let isLoggedIn=1;

let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// if converting an empty string
let isLoggedIn1="";

let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

// if converting a string with some values
let isLoggedIn2="akshita";

let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

// summary
// 1 => true; 0 => false
// "" => false
// "akshita" => true

// converting in string
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)

