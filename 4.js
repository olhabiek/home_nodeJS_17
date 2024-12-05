var productInfo;
function updateStock(inventory, productInfo) {
    var title = productInfo[0], quantity = productInfo[2];
    if (inventory[title]) {
        inventory[title] += quantity;
    }
    else {
        inventory[title] = quantity;
    }
    return inventory;
}
var inventory = {
    Laptop: 10,
    Phone: 5,
};
productInfo = ["Laptop", 1000, 3];
updateStock(inventory, productInfo);
console.log(inventory);
productInfo = ["Tablet", 500, 7];
updateStock(inventory, productInfo);
console.log(inventory);
