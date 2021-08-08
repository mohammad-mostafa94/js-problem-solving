let phones = [
    {name:'Samsung',price:10000,quantity:1},
    {name:'Sam1',price:10,quantity:33},
    {name:'Sam2',price:100,quantity:2},
    {name:'Sam3',price:1000,quantity:1}
];
let cartTotal = 0;
for (const phone of phones) {
    const productTotal = phone.price * phone.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);

// let sum=0; for( let i = 0; i<=3;i++){ sum = sum + i; }
// console.log(sum);