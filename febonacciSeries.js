let first = 0;
let second = 1;
let n = 5;
for (let count = 0; count < n; count++) {
    if (count <= 1) {
        var fibo = count;
    }
    else {
        fibo = first + second;
        
        first = second;
    }
}

// let first =  0;
// let second = 1;
// let n = 5;
// for (let count = 0; count < n; count++) {
//     if (count<=1) {
//         var fibo = count;
//     }
//     else{
//         fibo = first + second;
//         first = second;
//         second = fibo;
//     }
//     console.log(fibo);
// }