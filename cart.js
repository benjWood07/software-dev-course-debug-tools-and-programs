const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];
//Fix Applied: Changed `i <= cartItems.length` to `i < cartItems.length` to remove final iteration
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price; 
  }
  return total;
}

function applyDiscount(total, discountRate) {
  //Fixed: Added input validation
  if (typeof discountRate !== 'number' || discountRate < 0 || discountRate > 1) {
    console.error("Invalid disocunt rate. Must be a number between 0 and 1.");
    return total;
  }
  return total - total * discountRate;
}

function generateReceipt(cartItems, total) {
  //Fixed: Added type validation and default value
  if (typeof total !== 'number' || isNaN(total)) {
    console.error("Invalid total. Must be a valid number.");
    total = 0;
  }
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`;
  return receipt;
}

//Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
console.log("Calculated total:", total); //Debug with log to verify calculation
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
console.log("Discounted total:", discountedTotal);
const receipt = generateReceipt(cart, discountedTotal);
console.log("Generated receipt:\n", receipt);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//Edge cases
//Test Case: Empty cart
const emptyCart = [];
const emptyTotal = calculateTotal(emptyCart);
console.log("Empty cart total:", 0);

//Test Case: Single item cart
const singleItemCart = [{ name: "Wireless Keyboard", price: 48 }];
const singleTotal = calculateTotal(singleItemCart);
console.log("SIngle item total:", singleTotal);
