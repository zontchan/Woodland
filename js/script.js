window.onload = ()=>{
 goSlider();
}

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




/*Company info section start*/
const sliderImgs = Array.from(document.querySelectorAll('.slider-item-img'));

function goSlider(){
    setInterval(()=>{
       for(let i=0; i<sliderImgs.length; i++){
         if(sliderImgs[i].classList.contains('img-active')){
             sliderImgs[i].classList.remove('img-active');
             if(i===(sliderImgs.length-1)){
                 i=0;
                 sliderImgs[i].classList.add('img-active');
             }
             else {
                 sliderImgs[i += 1].classList.add('img-active');
             }
         }
        }
    }, 3000);
}

const infoSlider = Array.from(document.querySelectorAll('.slider-arrow'));
infoSlider.forEach((arrow)=>{
    if(!arrow.classList.contains('info-slider')){
        return;
    }
    else {
        arrow.addEventListener('click', () => {
            for (let i = 0; i < sliderImgs.length; i++) {
                if (arrow.classList.contains('arrow-right')) {
                    if (sliderImgs[i].classList.contains('img-active')) {
                        sliderImgs[i].classList.remove('img-active');
                        if (i === (sliderImgs.length - 1)) {
                            i = 0;
                            sliderImgs[i].classList.add('img-active');
                        } else {
                            sliderImgs[i += 1].classList.add('img-active');
                        }
                    }
                } else {
                    if (sliderImgs[i].classList.contains('img-active')) {
                        sliderImgs[i].classList.remove('img-active');
                        if (i === 0) {
                            i = sliderImgs.length - 1;
                            sliderImgs[i].classList.add('img-active');
                        } else {
                            sliderImgs[i -= 1].classList.add('img-active');
                        }
                    }
                }
            }
        })
    }
})
/* Company info section end*/


/*Products section start*/
//First section
const productsSlider = document.querySelectorAll('.products-slider');
const productsContainer = document.querySelectorAll('.products-container');
console.log(productsContainer);
const firstElement = productsContainer.querySelectorAll('.product')[0];

let firstElementWidth = firstElement.clientWidth + 19;
let scrollWidth = productsContainer.scrollWidth - productsContainer.clientWidth;

function showHideIcons(){
    productsSlider[0].style.display = productsContainer.scrollLeft === 0 ? 'none': 'block';
    productsSlider[1].style.display = productsContainer.scrollLeft === scrollWidth ? 'none' : 'block';
}

productsSlider.forEach((arrow)=>{
    arrow.addEventListener('click',()=>{
        productsContainer.scrollLeft += arrow.classList.contains('arrow-left') ? -firstElementWidth : firstElementWidth;
        setTimeout(()=>{
            showHideIcons()
        },60);

    })
})


//Second section
/*Products section end*/