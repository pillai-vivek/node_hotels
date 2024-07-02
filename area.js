const prompt = require('prompt-sync')();
let u=Math.PI;

var circle=(a,b)=>{
    a=parseInt(a);
    if(b=="area"||b=="Area")
        {
            return u*a*a;
        }
    else if(b=="perimeter"||b=="Perimeter")
        {
            return 2*u*a;
        }
    else if(b=="diameter"||b=="Diameter")
        {
            return 2*a;
        }
    
}
const x=prompt("enter the radius :");
const y=prompt("enter the variable :");
console.log("the result of calculator is : "+circle(x,y));
    
