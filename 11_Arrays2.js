// Arrays part 2
const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros)                  //array ke andar array aajayega
console.log(marvel_heros)                    // it takes array as data

//concat -> it also returns a new array merges individual array elements
const newArr=[1,2,3,4]
const newArr1=[1,2,3]
const newArr2=newArr.concat(newArr1)
console.log(newArr2)


//*********  spread  operator ************* 
// glass spread 
// merge two arrays
const all_new_heros=[...marvel_heros,...dc_heros]         //array values into individiual elements
console.log(all_new_heros)


//*********** flat ************
const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray =     anotherArray.flat(Infinity)   //flat -> single ek array mai all elements we are required to give depth
console.log(realAnotherArray)


// data scraping data is in different format and we need it in Array
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))                //from -> convert it to array
console.log(Array.from({name:"akshita"}))        //we will get empty array in case of object we need to specify thar it needs to make array of key or values


//converting multiple variables into a single array
const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3))            //of -> returns new array from set of elements
