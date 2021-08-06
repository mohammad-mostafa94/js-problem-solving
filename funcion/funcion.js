function bringChocolate (taka){
    var chocolatePrice = 5;
    var chocolateQuantity = taka / chocolatePrice;
    return chocolateQuantity;
}

var result = bringChocolate(100);
console.log(result);