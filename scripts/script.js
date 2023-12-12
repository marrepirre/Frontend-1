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
