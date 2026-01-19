let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    showCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    showCart();
}

function showCart() {
    let cartList = document.getElementById("cart-list");
    let totalEl = document.getElementById("total");

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        let li = document.createElement("li");
        li.innerHTML = `
            ${item.name} - ${item.price} DH
            <button onclick="removeFromCart(${index})">Supprimer</button>
        `;
        cartList.appendChild(li);
    });

    totalEl.textContent = total;
}
