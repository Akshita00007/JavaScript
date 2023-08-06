// **************** Filter Map and Reduce *********************

// **************** Filter ************************************
//takes a call back function ahr value ko each accress and a condition (jo satisfy krenge woh return hongi values)
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter( (num) => num > 4) 
console.log(newNums)        

// doing it with for each loop
// const newestNums=[];
// myNums.forEach( (item) => {
//     if(item>4){
//         newestNums.push(item)
//     }
// })
// console.log(newestNums)

// greet=()=>{
//     console.log("1");
// }
// greet()

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // books whose genre is history
  const userBooks=books.filter( (bk) => bk.genre==="History")
  console.log(userBooks);

  const userBooksOnYearBasis=books.filter( (bk) => bk.publish >= 2000)
  console.log(userBooksOnYearBasis);

  // ***************** Map ******************************************
  const myNumbers=[1,2,3,4,5,6,7,8,9,10]
  const addTen=myNumbers.map( (num) => num+10)
  console.log(addTen)

  // chaining
  const chainingg=myNumbers
                            .map( (num) => num*10)
                            .map( (num) => num+1)
                            .filter( (num) => num > 40)

console.log(chainingg)

// ******************* Reduce ***************************
// shopping cart
const newMynumbers=[1,2,3]
// const myTtotal=newMynumbers.reduce( function (acc,curval) {
//     console.log(`acc: ${acc} and curval:${curval}`);
//     return acc+curval
// },0 // start value of accumulator)
// )

// console.log(myTtotal)

const myTtotal=newMynumbers.reduce( (acc,item) => acc+item,0)
console.log(myTtotal)


const shoppingCart=[
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:4999
    },
    {
        itemName:"data science course",
        price:2999
    },
]

const priceToPay=shoppingCart.reduce( (acc,item)=> acc+item.price,0);
console.log(priceToPay);