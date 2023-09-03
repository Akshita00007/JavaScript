const form = document.querySelector("form");
// const height=parseInt(document.querySelector('#height').value);
// this use case will give empty values
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height) ){
        results.innerHTML=`Please give a valid input ${height}`;
    } else if(weight==='' || weight<0 || isNaN(weight) ){
        results.innerHTML=`Please give a valid input ${weight}`;
    } else {
        const bmi = (weight)/((height*weight)/10000).toFixed(2);
        //show the result
        // results.innerHTML=`<span>${bmi}</span`;
        
        if(bmi<18.6){
        results.innerHTML=`<p>Under Weight : ${bmi}</p>`;
        } else if(bmi>=18.6 && weight<=24.9){
            results.innerHTML=`<p>Normal Range : ${bmi}</p>`;
        } else {
            results.innerHTML`<p>Overweight : ${bmi}</p>`;
        }
    }
    

})