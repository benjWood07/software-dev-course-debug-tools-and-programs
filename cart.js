const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];
//Fix Applied: Changed `i <= cartItems.length` to `i < cartItems.length` to remove final iteration
function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
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
  return total - total * discountRate; // Bug: Missing validation for discountRate
}

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;
