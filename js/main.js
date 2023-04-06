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

// Выпадающий список
var buttonShow = document.querySelector('.see-all');
var secondPage = document.querySelectorAll(".second-sort-page .grid-sec");

console.log(secondPage);

buttonShow.onclick = function() {
    if (buttonShow.classList.length == 1) {
        buttonShow.classList.add("see-all-shown");
        buttonShow.innerHTML = "Hide All Collections";
        for (i = 3; i < 9; i++) {
            secondPage[i].classList.remove("grid-hidden");
        }
    } else {
        buttonShow.classList.remove("see-all-shown");
        buttonShow.innerHTML = "See All Collections"
        for (i = 3; i < 9; i++) {
            secondPage[i].classList.add("grid-hidden");
        }
    };
}

// Окно всплывающее
var Searchbutton = document.querySelector(".search .submit");
Searchbutton.onclick = alert("Принято");
