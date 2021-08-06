// var name = ['mostafa','alamin',null,11,undefined,'sabbir',0,'mahbub'];

// for(i=0; i < name.length ; i++){
//     var element = name[i];
//     if(element == false){
//         console.log("false element",element);
//     }
//     // console.log(element);
// }

let arr = [undefined, null, 0, 'hello', null];

let truthy = [];
let falsy = [];

//find all falsy values in the array with for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined || arr[i] === null || arr[i] === 0 || arr[i] === '') {
        falsy.push(arr[i]);
    }
}
console.log(falsy);


//find all truthy values in the array with for loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== undefined && arr[i] !== null && arr[i] !== 0 && arr[i] !== '') {
        truthy.push(arr[i]);
    }
}

console.log(truthy);