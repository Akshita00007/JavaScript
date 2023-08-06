// ******************* Loops ***********************
for(let i=0;i<=10;i++)
{
    console.log(i)
}

// break and continue
for(let i=0;i<=10;i++)
{
    if(i==1){
        console.log(i);
        break;
    }
    console.log(i)
}
for(let i=0;i<=10;i++)
{
    if(i==1){
        
        continue;
      
    }
    console.log(i)
}

// while and do-while loop
let i=0;
while(i<5)
{
    console.log(i);
    i++;
}
console.log("do-while loop")
let j=0;
do{
    console.log(j);
    j++;
}while(j<1)

