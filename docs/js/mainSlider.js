const imageSlider = Array.from(document.querySelectorAll('.slider-item-img'));

export default function goSlider(){
    setInterval(()=>{
        for(let i=0; i<imageSlider.length; i++){
            if(imageSlider[i].classList.contains('img-active')){
                imageSlider[i].classList.remove('img-active');
                if(i===(imageSlider.length-1)){
                    i=0;
                    imageSlider[i].classList.add('img-active');
                }
                else {
                    imageSlider[i += 1].classList.add('img-active');
                }
            }
        }
    }, 3000);
}