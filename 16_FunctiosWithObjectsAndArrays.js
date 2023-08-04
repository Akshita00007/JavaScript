// *************** Functions with objects and arrays ***********************
// shopping cart

function calculateCartPrice(...num1){       //rest operator -> individual items into a bundle
    return num1
}


console.log(calculateCartPrice(200,400,500))

//******** if we add val in function ********** 
function cart(val1,val2, ...num1){
    return num1;
}
console.log(cart(200,3000,400,5000))

// ************ Passing Objects in Function ************
const user={
    username:"akshita",
    price:199
}
function handleObject(anyobject){              //so that we can pass any object in it
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user);
handleObject({username:"Sam",                   //passing object directly in function
        price:399
})

// *********** Passing arrays in function *************
const myNewArray=[100,200,300]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,330,791,890,789]))               //passing array directly in function