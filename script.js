let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <li>
                ${item.name} - ${item.price} DH
                <button onclick="removeFromCart(${index})">❌</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = total;
    document.getElementById("cart-count").innerText = cart.length;
}
