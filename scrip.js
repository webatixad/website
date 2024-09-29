const addToCartButton = document.getElementById('addToCartButton');

addToCartButton.addEventListener('click', () => {
  // Get the product details from your data structure
  const productName = 'Product Name';
  const productPrice = 19.99;
  const productQuantity = 1; // Adjust as needed

  // Create a product object
  const product = {
    name: productName,
    price: productPrice,
    quantity: productQuantity
  };

  // Add the product to the cart (replace with your cart implementation)
  const cart = []; // Initialize your cart as an empty array
  cart.push(product);

  // Update the UI to reflect the cart changes (e.g., display a cart icon with the item count)
  updateCartUI(cart);

  // Handle other actions (e.g., show a success message, update the total)
  console.log('Product added to cart:', product);
});

function updateCartUI(cart) {
  // Implement your logic to update the UI based on the cart contents
  // For example, you could display a cart icon with the item count
  const cartIcon = document.getElementById('cartIcon');
  cartIcon.textContent = cart.length;
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let userCarts = {}; // Store user carts in memory (for demo purposes)

app.post('/update-cart', (req, res) => {
    const cart = req.body;
    const userId = Object.keys(cart)[0]; // Get the user ID

    // Update the user's cart
    userCarts[userId] = cart[userId];

    res.json({ message: 'Cart updated successfully', cart: userCarts[userId] });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
