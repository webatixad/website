const products = [
    { id: 1, name: "Website", price: 599 , image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: 20, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: 30, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Product 4", price: 10, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Product 5", price: 20, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Product 6", price: 30, image: "https://via.placeholder.com/150" },
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    document.getElementById('cartCount').innerText = cart.length;
    alert(`${product.name} has been added to your cart!`);
}

displayProducts();
