// var person = 56;
// var result = person%2;
// if (result != 0) {
//     console.log("result odd");
// }
// else{
//     console.log("even");
// }

function evenOdd(number) {
    let reminder= number%2;
    if (reminder == 0) {
        return "even";
    }
    else{
        return "odd";
    }
}

console.log(evenOdd(4));