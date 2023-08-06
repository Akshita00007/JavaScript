// for of

// [" "," "," "]
// [{},{},{}]

const arr=[1,2,3,4,5];
for (const num of arr) {
    console.log(num)
}

// Maps -> collection of unique values
const map=new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
console.log(map);

// printing map
for(keys of map){
    console.log(keys);                  // keys-value in array
}

// agar esa nahi cahihiye
for(const [key,value] of map){
    console.log(key, ':-' , value);                  // keys-value in array
}

// for of loop on object
const myObject={
    1: 'a',
    2:'b'
}

// for(i of myObject){          // not iteratable
//     console.log(i)
// }


// ****************** Object *************
// for in loop
const myObject1={
    js : "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}


for (const key in myObject1) {       // gives keys
   console.log(key)
}

for(const key in myObject1){        // gives values
    console.log(myObject1[key]);
}

// for in loop on arrays
// it will give keys or index values
const myArr=["rb","py","cpp","java","js"]
for(const key in myArr){
    console.log(key)                //index 
}

// to print values
for(const key in myArr){
    console.log(myArr[key])
}


// *********************** for each loop ************
const coding =["js","ruby","javascript","swift by apple","C++"]
coding.forEach( function(val){
    console.log(val)
} )              // call back funtion --> no name

// other varaint of for each loop
coding.forEach( (val)=> {
    console.log(val)
})

// passing funtion
function printMe(item){
    console.log(item)
}
coding.forEach(printMe)

console.log("it also contains other values too other than item : index,arrlist")
coding.forEach( (item,index,arr)=>{
    console.log(item ," ", index," ", arr)

})

// objects array
const myCodig=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCodig.forEach( (item)=>{
    console.log(item.languageName);
})

// ********** what does for each loop return ****************
const code=[1,2,3,4,5];

const values=code.forEach( (item)=>{
    //console.log(item);
    return item;
})
// it does not return any value

console.log(values)
