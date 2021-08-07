// let numbers = [2,3, 4, 5,2, 4];
// let uniqueNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     // console.log("element",element);
//     if (uniqueNumbers.indexOf(element) === -1) {
//         uniqueNumbers.push(numbers[i]);
//     }
// }
// console.log(uniqueNumbers);

// let persons = ['mostafa','alamin','sabbir','mahbub','sakil','samim','mohim','salim','saad','sabit','saad','samim','mohim','salim','mostafa'];

// let uniquePersons = [];
// for (let i = 0; i < persons.length; i++) {
//     const element = persons[i];
//     if (uniquePersons.indexOf(element) === -1) {
//         uniquePersons.push(element);
//     }
// }
// console.log(uniquePersons);

function removePersons(persons) {
    let uniquePersons = [];
    // for (let i = 0; i < persons.length; i++) {
    //     const element = persons[i];
    //     if (uniquePersons.indexOf(element) === -1) {
    //         uniquePersons.push(element);
    //     }
    // }
    for(const element of persons){
        if (uniquePersons.indexOf(element) === -1) {
            uniquePersons.push(element);
        }
    }
    return uniquePersons;
}

let persons = ['mostafa','alamin','sabbir','mahbub','sakil','samim','mohim','salim','saad','sabit','saad','samim','mohim','salim','mostafa'];


const idealPersons = removePersons(persons);
console.log(idealPersons);