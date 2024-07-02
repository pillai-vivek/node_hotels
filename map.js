let arr=[12,524,7826,99,3436,199];
//i returns value
//j returns index
const ans=arr.map((i,j)=>{
    console.log(j,i);
    
    if(i>200)
        {
            return i;
        }
})
console.log(ans);