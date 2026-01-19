let cart = [];

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalEl = document.getElementById("total");
const orderDetails = document.getElementById("orderDetails");

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} DH
            <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    totalEl.textContent = total;

    let details = "";
    cart.forEach(item => {
        details += item.name + " - " + item.price + " DH\n";
    });
    details += "\nTotal : " + total + " DH";

    orderDetails.value = details;
}
