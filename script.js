"use strict";
var mountains = [
    { name: "kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
];
function findNameOfTallestMountain(mountains) {
    var currentTallest = 0;
    var tallestName = "start";
    mountains.forEach(function (mountain) {
        if (mountain.height > currentTallest) {
            currentTallest = mountain.height;
            tallestName = mountain.name;
        }
    });
    console.log(tallestName);
    return tallestName;
}
findNameOfTallestMountain(mountains);
var products = [
    { name: "jacket", price: 30 },
    { name: "shirt", price: 60 },
    { name: "pants", price: 90 }
];
function calcAverageProductPrice(products) {
    var totalPrice = 0;
    var averagePrice = 0;
    products.forEach(function (product) {
        totalPrice += product.price;
        averagePrice = totalPrice / products.length;
    });
    console.log(averagePrice);
    return averagePrice;
}
calcAverageProductPrice(products);
var inventory = [
    { product: { name: "motor", price: 10.0 }, quantity: 10 },
    { product: { name: "sensor", price: 12.5 }, quantity: 4 },
    { product: { name: "LED", price: 1.0 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    var totalPrice = 0;
    var itemPrice = 0;
    inventory.forEach(function (item) {
        itemPrice = item.product.price * item.quantity;
        totalPrice += itemPrice;
    });
    console.log(totalPrice);
    return totalPrice;
}
calcInventoryValue(inventory);
