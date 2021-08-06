// const number = 3;
// let fac = 1;
// let i = number;
// while (i >= 1) {
    // console.log(i);
//     fac = fac * i;
//     i--;
    
//     console.log(fac);
// }
// console.log("last result",fac)

function getFactorial(number) {
    let fact = 1;
    let i = number ;
    while (i>=1) {
        fact *= i;
        i--;
    }
    return fact;
}

const firstFactorial = getFactorial(6);
console.log(firstFactorial);