console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2!=1)

// comparison with strings
console.log("2" > 1 )    //2 converted to no

//typescript dont allow to compare two values of different data types

// avoid these types of conversion null and undefined
console.log(null > 0)           //false
console.log(null==0)            //false
console.log(null>=0)            //true

// comparison and greater than less than (equality check) works differntly

console.log(undefined==0)       //false

// strict check ===
console.log(2=="2")
console.log(2==="2")






