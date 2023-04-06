// Смена фотографий
var buttonSlider = document.querySelector(".button-right");
var mainPictContent = document.querySelectorAll("header .main-pict-content .div-images img");
var Slider = document.querySelectorAll(".scroler div");
var counter = 0;
console.log(Slider);

buttonSlider.onclick = function() {
    mainPictContent[counter].className = "hidden";
    Slider[counter].className = "item2";
    counter++;
    if (counter >= mainPictContent.length) {
        counter = 0;
    };
    
    mainPictContent[counter].className = "shown";
    Slider[counter].className = "item1";
};

// Выплывающий список
var buttonShow = document.querySelector('.see-all');
console.log(buttonShow);


