// let first = 0, second = 1, fibo, numbers = 6;
// for (let count = 0; count < numbers; count++) {
//     if (count < 2) {
//         fibo = count;
//     }
//     else {
//         fibo = first + second;
//         first = second;
//         second = fibo;
//     }
//     console.log(fibo);
// }

let fibo = [0,1];
for (let index = 2; index < 7 ; index++) {
    fibo[index] = fibo[index - 1] + fibo[index - 2];
    console.log(fibo[index]);
}