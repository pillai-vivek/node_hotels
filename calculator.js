const prompt = require('prompt-sync')();
const calculator=(a,b,c)=>{
    a=parseInt(a);
    b=parseInt(b);
    if(c =="+")
        {
            return a + b;
        }
        
    else if(c=="-")
        {
            return a - b;
        }
    else if(c=="*")
        {
            return a * b;
        }
       
    else if(c=="/")
        {
            return a / b;
        }
}
const x=prompt("enter the number 1 :");
const y=prompt("enter the number 2 :");
var z=prompt("enter the operator (+,-,*,/):");
console.log("the result of calculator is : "+calculator(x,y,z));




