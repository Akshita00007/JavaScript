// nested functions
function one(){
    const username="akshita"

    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}
one()

// ice-cream one bada hai, two one se maang skta hai lekin one two se nahi maang skata 
// parent child -> child can access parent variables but parent cant access child variables

if(true){
    const username="akshita"
    if(username==="akshita"){
        const website=" youtube"
        console.log(username+website)

    }
    //console.log(website)                //not accessible
}
//console.log(username)                   //not accessible

// ***************** Interesting *********************
console.log(addOne(5))             //hoisting -> no error
function addOne(num){
    return num+1

}
// addOne(5)

//in other way
// expression -> variables holding funtions
addTwo(5)                           //error
const addTwo=function(num){
    return num+2
}
// addTwo(5)