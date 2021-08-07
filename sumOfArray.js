// let num = [1, 3, 2, 4];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     console.log(element);
//     sum += element;
//     console.log(sum)
// }
// console.log("last value",sum);

function arraySum(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        sum += element;
    }
    return 'total =',sum;
}
let num = [1, 3, 2, 4];
const result = arraySum(num);

console.log(result);
