const number = 3;
// let fac = 1;
// for (let i = 1; i <= number; i++) {
//     console.log('i*',i);
//     fac = fac * i;
// }
// console.log(fac);

function factorial(number) {
    let fac = 1;
    for (let i = 1; i <= number; i++) {
        // console.log('i*', i);
        fac = fac * i;
    }
    return fac;
}

const factorialResult = factorial(3);
console.log(factorialResult);