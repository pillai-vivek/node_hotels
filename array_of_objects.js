let x=[
    {name:"Vivek",salary:70000},
    {name:"Aman",salary:65000},
    {name:"Viraj",salary:55000}, 
    {name:"shivam",salary:57000}

]
sum=0;

let con =x.filter((x)=>
{
    return x.salary>56000;
})
console.log(con);
// for (let i=0;i<x.length;i++) {
//     sum=sum+x[i].salary;
//     

// }
// console.log(sum);