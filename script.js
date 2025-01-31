
let cartCount = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartBtn = document.querySelector('.cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartBtn.textContent = `Cart (${cartCount})`;
    });
});
