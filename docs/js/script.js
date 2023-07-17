import headerBurger from "./burgerMenu";
import headerSearch from "./headerSearch";
import goSlider from "./mainSlider";

window.onload = ()=>{
 goSlider();
}
/*Popup burger start*/
headerBurger();
/*Popup burger end*/



/*Popup search start*/
headerSearch();
/*Popup search start*/




/*Company info section start*/
goSlider();

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
const firstElement = productsContaner.querySelectorAll('.product')[0];

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

