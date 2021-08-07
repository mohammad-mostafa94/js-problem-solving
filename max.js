
function getMax(first, second,third) {
    let maxNum =(first>second && first > third)?first:((second>third)?second:third);
    return maxNum;
}
let first = 11;
let second = 33;
let third = 22;

let checkMax = getMax(first,second,third);
console.log(checkMax);
