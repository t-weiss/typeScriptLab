interface Mountain {
  name: string;
  height: number;
}
let mountains: Mountain[] = [
  { name: "kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(mountains: Mountain[]): string {
  let currentTallest: number = 0;
  let tallestName: string = "start";
  mountains.forEach(mountain => {
    if (mountain.height > currentTallest) {
      currentTallest = mountain.height;
      tallestName = mountain.name;
    }
  });
  console.log(tallestName);
  return tallestName;
}
findNameOfTallestMountain(mountains);

interface Product {
  name: string;
  price: number;
}
let products: Product[] = [
  { name: "jacket", price: 30 },
  { name: "shirt", price: 60 },
  { name: "pants", price: 90 }
];
function calcAverageProductPrice(products: Product[]): number {
  let totalPrice = 0;
  let averagePrice = 0;
  products.forEach(product => {
    totalPrice += product.price;

    averagePrice = totalPrice / products.length;
  });
  console.log(averagePrice);
  return averagePrice;
}
calcAverageProductPrice(products);

interface InventoryItem {
  product: Product[];
  quantity: number;
}
let inventory: InventoryItem[] = [
  { product: [{ name: "motor", price: 10.0 }], quantity: 10 },
  { product: [{ name: "sensor", price: 12.5 }], quantity: 4 },
  { product: [{ name: "LED", price: 1.0 }], quantity: 20 }
];

function calcInventoryValue(inventory: InventoryItem[]): number {
  let totalPrice: number = 0;
  let itemPrice: number = 0;
  inventory.forEach(item => {
    itemPrice = item.product[0].price * item.quantity;
    totalPrice += itemPrice;
  });
  console.log(totalPrice);
  return totalPrice;
}
calcInventoryValue(inventory);
