let cart = [];
let cartItems = document.getElementById("cart-items");
let cartCount = document.getElementById("cart-count");
let totalEl = document.getElementById("total");
let orderDetails = document.getElementById("orderDetails");

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
    let details = "";

    cart.forEach((item, index) => {
        total += item.price;
        details += item.name + " - " + item.price + " DH\n";

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} DH
            <button onclick="removeFromCart(${index})">X</button>
        `;
        cartItems.appendChild(li);
    });

    cartCount.textContent = cart.length;
    totalEl.textContent = total;
    orderDetails.value = details + "\nTotal : " + total + " DH";
}
