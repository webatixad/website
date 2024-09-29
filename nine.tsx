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
