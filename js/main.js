var buttonSlider = document.querySelector(".button-right");

var mainPictContent = document.querySelectorAll("header .main-pict-content div")
var counter = 0;

buttonSlider.onclick = function() {
    mainPictContent[counter].className = "hiden";
    counter++;
    if (counter >= mainPictContent.length) {
        counter = 0;
    };
    
    mainPictContent[counter].className = "shown";
};

console.log("Работает");