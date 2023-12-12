document.addEventListener('DOMContentLoaded', function () {
    var shoppingCart = [];

    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cartItems = document.getElementById('cart-items');
    var totalPrice = document.getElementById('total-price');
    var varukorg = document.querySelector('.varukorg');
    var wrapper = document.querySelector('.wrapper');
    var visable = false;

    varukorg.addEventListener('click', function () {
        wrapper.style.visibility = visable ? 'hidden' : 'visible';
        visable = !visable;
    });

    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var productName = button.getAttribute('data-name');
            var productPrice = parseFloat(button.getAttribute('data-price'));

            addToCart({ name: productName, price: productPrice, quantity: 1 });
            updateCart();
        });
    });

    function addToCart(product) {
        var existingProduct = shoppingCart.find(function (p) {
            return p.name === product.name;
        });

        if (existingProduct) {
            existingProduct.quantity += product.quantity;
        } else {
            // Lägg till en ny produkt med angivet antal
            shoppingCart.push({ ...product });
        }
    }

    function updateCart() {
        cartItems.innerHTML = '';

        shoppingCart.forEach(function (product) {
            var listItem = document.createElement('li');
            listItem.textContent = `${product.name} - ${product.price} kr x ${product.quantity}`;
            listItem.className = 'cart-item';
            cartItems.appendChild(listItem);
        });

        var total = calculateTotal();
        totalPrice.textContent = 'Totalt: ' + total + ' kr';
    }

    function calculateTotal() {
        return shoppingCart.reduce(function (sum, product) {
            return sum + product.price * product.quantity;
        }, 0);
    }
});
