// Strings
const name="akshita"
const repoCount=4

console.log(name+repoCount+" Value") 

// string interpolation
console.log(`Hello my name is ${name} and repoCount is ${repoCount}`)

// another way to declare strings 
const getName=new String("akshita")
console.log(getName[0])
console.log(getName.__proto__)

console.log(getName.length)
console.log(getName.toUpperCase())
console.log(getName)
console.log(getName.charAt(2))
console.log(getName.indexOf('t'))

const newString=getName.substring(0,4)   //last wali value include nahi hogi  ignore negative values and starts with 0
console.log(newString)

//slice
const anotherString=getName.slice(-8,4)    //can even use negative values
console.log(anotherString)

//trim
const newString1="     akshita     "       //removes extra spaces
console.log(newString1)
console.log(newString1.trim())

//replace
const url="https://akshita%20mukati"
console.log(url.replace('%20','-'))
console.log(url)
console.log(url.includes('akshita'))

//strings to array
// split
console.log(getName.split(' '))


