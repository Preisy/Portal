<script setup lang="ts">
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n: number) {
    showSlides(slideIndex += n);
}
function currentSlide(n:number) {
    showSlides(slideIndex = n);
}

function showSlides(n:number) {
    var i;
    var slides = document.getElementsByClassName("slide-block");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length){
    slideIndex = 1
}
if (n < 1){
    slideIndex = slides.length
}
for (i = 1; i < slides.length; i++){
    slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++){
    dots[i].className.replace("active","");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += "active";
}
</script>

<template>
   <div class="slide-container">
        <div class="slide-block">
            <img src="../../assets/images/general/Rectangle 11.svg"  alt="" class="slide-img">
            <div class="text-block">
                <h3 class="maiin-text">Натяжной потолок в гостиной</h3>
                <p class="add-text">Наши натяжные потолки отличаются замечательным качеством и долговечностью. Этот потолок установлен в гостиной и делает ее уютной и нежной.</p>
                <button class="order">Хочу такой же!</button>
            </div>    
        </div>
        <div class="slide-block">
            <img src="../../assets/images/general/Rectangle 11.svg" alt="" class="slide-img">
            <div class="text-block">
                <h3 class="maiin-text">Натяжной потолок в гостиной</h3>
                <p class="add-text">Наши натяжные потолки отличаются замечательным качеством и долговечностью. Этот потолок установлен в гостиной и делает ее уютной и нежной.</p>
                <button class="order">Хочу такой же!</button>
            </div>    
        </div>
        <div class="slide-block">
            <img src="../../assets/images/general/Rectangle 11.svg" alt="" class="slide-img">
            <div class="text-block">
                <h3 class="maiin-text">Натяжной потолок в гостиной</h3>
                <p class="add-text">Наши натяжные потолки отличаются замечательным качеством и долговечностью. Этот потолок установлен в гостиной и делает ее уютной и нежной.</p>
                <button class="order">Хочу такой же!</button>
            </div>    
        </div>
        <div class="slide-block">
            <img src="../../assets/images/general/Rectangle 11.svg" alt="" class="slide-img">
            <div class="text-block">
                <h3 class="maiin-text">Натяжной потолок в гостиной</h3>
                <p class="add-text">Наши натяжные потолки отличаются замечательным качеством и долговечностью. Этот потолок установлен в гостиной и делает ее уютной и нежной.</p>
                <button class="order">Хочу такой же!</button>
            </div>    
        </div>
        <div class="slide-block">
            <img src="../../assets/images/general/Rectangle 11.svg" alt="" class="slide-img">
            <div class="text-block">
                <h3 class="maiin-text">Натяжной потолок в гостиной</h3>
                <p class="add-text">Наши натяжные потолки отличаются замечательным качеством и долговечностью. Этот потолок установлен в гостиной и делает ее уютной и нежной.</p>
                <button class="order">Хочу такой же!</button>
            </div>    
        </div>
        <button  class="prev" onclick="plusSlides(-1)">
            <img src="../buttons/icons/left_arrow.svg" alt="" class="left">
        </button>
        <button  class="next" onclick="plusSlides(1)">
            <img src="../buttons/icons/right_arrow.svg" alt="" class="right">
        </button>
        <div class="dots-block">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
        </div>
   </div> 
</template>

<style scoped lang="scss">
    .slide-container {
        max-width: 1000px;
        position: relative;
        margin: auto;
    }
    .slide-block {
        display: flex;
        .slide-img {
            margin-right: 32px;
        }
        .maiin-text {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 37px;
            color: #373737;
        }
        .add-text {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 130%;
            color: #373737;
            margin-bottom: 129px;
        }
        .order {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 10px;
            line-height: 12px;
            text-align: center;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            background: linear-gradient(180deg, #FEDA82 0%, #FEC338 100%);
            border-radius: 13px;
            border: none;
            padding: 10px 15px;
        }
    }
    .prev, .next {
        background: none;
        border: none;
    }
    .dot {
        cursor: pointer;
        width: 14px;
        height: 14px;
        margin: 0 20px;
        background: linear-gradient(180deg, #D0A029 0%, #DB9C09 100%);
        border-radius: 10px;
        display: inline-block;
        &:active {
            background-color: #373737;
        }
    }

</style>
