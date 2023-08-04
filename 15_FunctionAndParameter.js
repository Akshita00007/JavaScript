//************************** Function and Parameter ***************************
function sayMyName(){
    console.log("akshita");
}

// sayMyName -> reference
// sayMyName -> execution

sayMyName()

// function to add two numbers

// function addTwoNumbers(number1,number2){          //parameter
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){          //parameter
    return number1 + number2;
}
addTwoNumbers()   // NaN

addTwoNumbers(2,4)   //argument
addTwoNumbers(3,"6")  //string

const result= addTwoNumbers(3,9)
console.log(result)                //undefined

// ****************
function loginUserName(username){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

loginUserName("hitesh")               //no  result only value returned
console.log(loginUserName("hitesh"))
console.log(loginUserName())


// **************** If method is called but no value is being passed -> undefined  ***********************
// passing default value username="sam"