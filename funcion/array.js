// var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
// console.log(nums.indexOf(6));

var names = ['mostafa','alamin',null,11,undefined,'sabbir',0,'mahbub'];

var falsy= [];
var truthy= [];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element === null || element === undefined || element === 0 || element === '') {
        falsy.push(element);
    }
    
}
console.log(falsy);
for (let i = 0; i < names.length; i++) {
    const element = names[i];
    if (element != null && element != undefined && element != 0 && element != '') {
        truthy.push(element);
    }
    console.log(truthy);
}
console.log('truthy',truthy);