/*Popup burger start*/
let burgerMenu = document.querySelector('.header-burger-menu');
let popup = document.querySelector('.burger-popup-wrapper');
let buttonClose = document.querySelector('.popup-close');
burgerMenu.addEventListener('click', popupInteract);
buttonClose.addEventListener('click', popupInteract);

function popupInteract() {
    popup.classList.toggle('popup-active');
    popup.classList.toggle('burger-popup-wrapper');
}
/*Popup burger end*/


/*Popup search start*/
const searchButton = document.querySelector('.loupe-ico');
const searchPopup = document.querySelector('.search-popup');
const searchPopupCloseButton = document.querySelector('.search-popup-close');

searchButton.addEventListener('click',()=>{
  searchPopup.classList.add('search-popup-active');
})

searchPopupCloseButton.addEventListener('click',()=>{
    searchPopup.classList.remove('search-popup-active');
})
/*Popup search start*/