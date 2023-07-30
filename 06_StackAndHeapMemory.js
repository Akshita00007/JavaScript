// two types of memory 
// 1. stack (used in primitive types) we 
// we get copy of variables
// 2. heap   (Non-primitive)
// we get refernce changes in original values 

let myYoutubeName="a"
let anotherName=myYoutubeName
anotherName="b"
console.log(anotherName)
console.log(myYoutubeName)


// stack

// 
// anotherName
// anotherName
// myYoutubeName


// heap
let userOne={
    email:"jhdclk",
    upi:"1",
}

let userTwo=userOne // refernece of above value


// heap

/*
 
copy of above code
same reference 
*/

userTwo.email="huy"
console.log(userOne)