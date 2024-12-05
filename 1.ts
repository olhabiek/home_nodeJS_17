function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  return price * quantity - discount;
}

console.log(calculateTotal(77, 3));
console.log(calculateTotal(5, 7, 25));
