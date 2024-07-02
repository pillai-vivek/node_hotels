console.log("number > 5 in array");
let arr1 = [12, 23, 45, 66, 3, 3, 3, 2, 1];
for (let i of arr1) {
    if (i > 5) {
        console.log(i);
    }
}
console.log("even numbers");
let arr = [12, 23, 45, 66, 3, 3, 3, 2, 1];
for (let i of arr) {
    if (i % 2 == 0) {
        console.log(i);
    }
}