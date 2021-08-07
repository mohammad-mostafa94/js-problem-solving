let numbers = [8, 3, 4, 5];
// let max =numbers[0];
// for (let i = 0; i < numbers.length; i++) {
//     let element = numbers[i];
//     if (max < element) {
//         max = element;
//     }
// }

function largest(numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (max < element) {
            max = element;
        }
    }
    return max;
}

const largestNumber = largest(numbers)
console.log('Largest number is =',largestNumber);