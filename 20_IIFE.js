// ******************* Immediately Invoked Fuctin Expression ***********************
// database connetcion
// global scope ke pollution se problem hoti hai kahi bar
// toh global scope ke pollution ko hatane ke liye IIFE ka use kra
// global scope mai variables aur function mai vriables 
// toh function mai global variables koi problem na create kare
// global
(function chai(){               //named iife
    console.log(`DB Connected`)
})();      // ; context rokna kaha hai iife ko nhi pta

// as arrow function
(()=>{
    console.log(`DB Connected TWO`);
})();

// expecting variable
((name)=>{                                      //simple iife and parameter
    console.log(`DB Connected TWO ${name}`);
})("akshita")


