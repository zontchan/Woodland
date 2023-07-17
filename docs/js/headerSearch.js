export default function headerSearch (){
    const searchButton = document.querySelector('.loupe-ico');
    const searchPopup = document.querySelector('.search-popup');
    const searchPopupCloseButton = document.querySelector('.search-popup-close');

    searchButton.addEventListener('click',()=>{
        searchPopup.classList.add('search-popup-active');
    })

    searchPopupCloseButton.addEventListener('click',()=>{
        searchPopup.classList.remove('search-popup-active');
    })
}