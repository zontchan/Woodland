export default function headerBurger() {
    let burgerMenu = document.querySelector('.header-burger-menu');
let popup = document.querySelector('.burger-popup-wrapper');
let buttonClose = document.querySelector('.popup-close');

burgerMenu.addEventListener('click', (e) => {
    popup.style.display = 'flex';

});
buttonClose.addEventListener('click', () => {
    popup.style.display = 'none';
});}
