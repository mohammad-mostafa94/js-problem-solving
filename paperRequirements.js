function paperRequirements(n1, n2, n3) {
    let firstBook = n1 * 100;
    let secondBook = n2 * 200;
    let thirdBook = n3 * 300;
    let totalPage = firstBook + secondBook + thirdBook;
    return totalPage;
}
const needPage = paperRequirements(1,1,1);
console.log(needPage);