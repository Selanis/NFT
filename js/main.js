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
var secondPage = document.querySelectorAll(".second-sort-page2 .grid-sec");
var thirdPage = document.querySelectorAll(".third-sort-page .grid-sec");
var firstPage = document.querySelectorAll(".first-sort-page .grid-sec");

buttonShow.onclick = function() {
    if (buttonShow.classList.length == 1) {
        buttonShow.classList.add("see-all-shown");
        buttonShow.innerHTML = "Hide All Collections";
        for (i = 3; i < 9; i++) {
            secondPage[i].classList.remove("grid-hidden");
            thirdPage[i].classList.remove("grid-hidden");
            firstPage[i].classList.remove("grid-hidden");
        }
    } else {
        buttonShow.classList.remove("see-all-shown");
        buttonShow.innerHTML = "See All Collections"
        for (i = 3; i < 9; i++) {
            secondPage[i].classList.add("grid-hidden");
            thirdPage[i].classList.add("grid-hidden");
            firstPage[i].classList.add("grid-hidden");
        }
    };
}

// Сортировка
button1DAY = document.getElementById("day1");
button7DAYS = document.getElementById("days7");
button30DAYS = document.getElementById("days30");
sortList = document.querySelector(".list-pages");
console.log(sortList);

button1DAY.onclick = function() {
    if (sortList.classList.contains("visible1") === false) {
        sortList.classList.remove(sortList.classList[1]);
        sortList.classList.add("visible1");

        if (button7DAYS.classList.length == 2) {
            button7DAYS.classList.remove("shown-list");
        } else if (button30DAYS.classList.length == 2) {
            button30DAYS.classList.remove("shown-list")
        };
        button1DAY.classList.add("shown-list");
    } else { };
}

button7DAYS.onclick = function() {
    if (sortList.classList.contains("visible7") === false) {
        sortList.classList.remove(sortList.classList[1]);
        sortList.classList.add("visible7");

        if (button1DAY.classList.length == 2) {
            button1DAY.classList.remove("shown-list");
        } else if (button30DAYS.classList.length == 2) {
            button30DAYS.classList.remove("shown-list")
        };
        button7DAYS.classList.add("shown-list");
    } else { };
}

button30DAYS.onclick = function() {
    if (sortList.classList.contains("visible30") === false) {
        sortList.classList.remove(sortList.classList[1]);
        sortList.classList.add("visible30");

        if (button1DAY.classList.length == 2) {
            button1DAY.classList.remove("shown-list");
        } else if (button7DAYS.classList.length == 2) {
            button7DAYS.classList.remove("shown-list")
        };
        button30DAYS.classList.add("shown-list");
    } else { };
}

// Модальное окно
var buttonModalWindow = document.getElementById("modal-window");
buttonModalWindow.onclick = function() {
    buttonModalWindow = confirm("Are you sure?");
}
