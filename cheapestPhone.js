let phones = [
    {name:'Samsung',price:10000},
    {name:'Sam1',price:10},
    {name:'Sam2',price:100},
    {name:'Sam3',price:1000}
];
let cheapest = phones[0];
let totalPrice= 0;
for (const phone of phones) {
    totalPrice = totalPrice + phone.price;
    // console.log("price=",phone.price);
    if(phone.price < cheapest.price){
        cheapest = phone;
    }

}
console.log(totalPrice);
console.log("Cheapest rate phone is ",cheapest);