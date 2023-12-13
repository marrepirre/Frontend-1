function openOurTires() {
    // Ange URL till den sida du vill öppna i den nya fliken
    var src = "tire.html";
  
    // Öppna den nya fliken
    window.open(src, "_blank");
}

function toggleProducts(productClass) {
    var products = document.querySelectorAll('.product.' + productClass);

    products.forEach(function(product) {
        product.classList.toggle('hidden');
    });
}
document.querySelector('.sun').addEventListener('click', function() {
    toggleProducts('snow');
});

document.querySelector('.snow').addEventListener('click', function() {
    toggleProducts('sun');
});



// Varukorg
let shoppingCart = [];

// Funktion för att visa varukorgen
function showShoppingCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalContainer = document.getElementById('total-price');

    // Visa eller dölj varukorgen beroende på om det finns några produkter
    if (shoppingCart.length === 0) {
        cartItemsContainer.innerHTML = '<p> Varukorgen är tom.</p>';
        cartTotalContainer.innerHTML = '';
    } else {
        // Bygg HTML för varje produkt i varukorgen
        const cartItemsHTML = shoppingCart.map(item => `
            <div class="cart-item">
                <p> ${item.name} - ${item.quantity} st</p>
                <p >${item.price} kr <button onclick="removeFromCart('${item.productId}')">-</button></p>

            </div>
        `).join('');

        cartItemsContainer.innerHTML = cartItemsHTML;

        // Beräkna och visa totalpriset för varukorgen
        const totalAmount = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
        cartTotalContainer.innerHTML = `<p>Totalt: ${totalAmount} kr</p>`;
    }

    // Visa varukorgen
    
}
function removeFromCart(productId) {
    // Hitta index för produkten i varukorgen
    const index = shoppingCart.findIndex(item => item.productId === productId);

    if (index !== -1) {
        // Ta bort produkten från varukorgen
        shoppingCart.splice(index, 1);
        // Visa uppdaterad varukorg
        showShoppingCart();
    }
}
// Funktion för att lägga till produkt i varukorgen
function addToCart(productId, productName, price) {
    const existingItem = shoppingCart.find(item => item.productId === productId);

    if (existingItem) {
        // Om produkten redan finns, öka antalet
        existingItem.quantity += 1;
    } else {
        // Om produkten inte finns, lägg till den i varukorgen
            shoppingCart.push({
            productId: productId,
            name: productName,
            price: price,
            quantity: 1,
        });
    }

    // Visa varukorgen
    showShoppingCart();
}

