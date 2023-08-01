// ************** Arrrays **************
const myArr= [0,1,2,3,4,5,"akshita"]

//js arrays are resizable
//js arrays are of mixed data types
//important 
// *******
// when we copy a array into another it does shallow copy(share the same refernce)
// deep copy -> does not share the same refernce

// other way to declare array
const myArr1=new Array(1,2,3,4,"akshita")
console.log(myArr1[0])

//****************** array methods ************************
const myArr2=[1,2,3,5,6]
console.log(myArr2)
myArr2.push(4)                           //push
console.log(myArr2)
myArr2.pop()                             //pop
console.log(myArr2)

myArr2.unshift(5)                         //unshift -> insert at first
console.log(myArr2);                        

myArr2.shift()                            //shift pop at first
console.log(myArr2)

console.log(myArr2.includes(9))           //includes false
console.log(myArr2.indexOf(9))                   // indexof

const newArr=myArr2.join()                //join -> converts the values into comma string values
console.log(myArr2)
console.log(newArr)

console.log("A",myArr2);

const myn1=myArr2.slice(1,3)                    //slice -> does not include range
console.log(myn1);
console.log("B", myArr2)

const myn2=myArr2.splice(1,3)                   //splice -> include range manipulates original array
console.log(myn2)
console.log("C",myArr2)                         //**** changed array