// ******************* Objects *****************************
const tinderUser=new Object()     //singleton object
const tinder={}                 //non-singleton object 

// console.log(tinderUser)         //empty object

// setting values
tinderUser.id="101";
tinderUser.name="user1"
tinderUser.isLoggedIn=false

const regularUser={
    email: "some@gmail.com",
    //nested objects
    fullname:{
        userfullname:{
            firstname:"akshita",
            lastname:"mukati"

        }
    }
}

// accessing values
console.log(regularUser.fullname)               //stores full object
console.log(regularUser.fullname.userfullname)

//*************** merge objects ***************************
const obj1={
    1:"a",
    2:"b",
}
const obj2={
    3:"c",
    4:"d"
}

const obj3={obj1,obj2}              //merge as objects not individual elements
console.log(obj3)

const obj4=Object.assign(obj1,obj2)                //copies the value and returns a target object
const obj5=Object.assign({},obj1,obj2)          //the fisrt value is optional but its good to give it it is a target (target,source: the rest are source)
console.log(obj4)

//*************** merge using spread operator ****************
const obj6={...obj1,...obj2}
console.log(obj6);

// database se values aarahi hai 
//array of objects

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"hh@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]

console.log(users[1].email)
console.log(tinderUser)

//methods
console.log(Object.keys(tinderUser))                    //object keys konsi object pe
console.log(Object.values(tinderUser))                  //object values
console.log(tinderUser.length)
console.log(Object.entries(tinderUser))                 //Object.entries -> each key value pair in array

// *********** Loop through a object and it does not have a value you are looking for **********************
console.log(tinderUser.hasOwnProperty('isLoggedIn'))
console.log(tinderUser.hasOwnProperty('isLogged'))










