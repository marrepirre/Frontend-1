setTimeout(() => {
    const cartIcon = document.querySelector('#shopping-cart');
    const cartWrapper = document.querySelector('.wrapper');

    cartIcon.addEventListener('click', function () {
        
        // Toggle klassen 'open' för att visa/dölja varukorgen
        cartWrapper.classList.toggle('open');
    });
}, 1000)
