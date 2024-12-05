var orders = [
    { orderId: "001", amount: 100, status: "pending" },
    { orderId: "002", amount: 200, status: "shipped" },
    { orderId: "003", amount: 150, status: "delivered" },
    { orderId: "004", amount: 120, status: "pending" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
var pendingOrders = filterOrdersByStatus(orders, "pending");
var shippedOrders = filterOrdersByStatus(orders, "shipped");
var deliveredOrders = filterOrdersByStatus(orders, "delivered");
console.log(pendingOrders);
console.log(shippedOrders);
console.log(deliveredOrders);
