let cart = [];
let cartCount = document.getElementById('cart-count');
let orderDetails = document.getElementById('orderDetails');

function addToCart(name, price) {
    cart.push({name, price});
    cartCount.textContent = cart.length;
    updateOrderDetails();
    alert(name + " ajouté au panier !");
}

function updateOrderDetails() {
    let details = "";
    let total = 0;
    cart.forEach(item => {
        details += item.name + " - " + item.price + " DH\n";
        total += item.price;
    });
    details += "\nTotal: " + total + " DH";
    orderDetails.value = details;
}
