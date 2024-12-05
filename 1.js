function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    return price * quantity - discount;
}
console.log(calculateTotal(77, 3));
console.log(calculateTotal(5, 7, 25));
