const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operation = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length - 1) {
        counter = 0;
        operation = 0;
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "none";
        return;
    }
    counter++;
    operation = operation + widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "all ease .6s"

}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = sliderSection.length - 1;
        operation = widthImg * (sliderSection.length - 1)
        slider.style.transform = `translate(-${operation}%)`;
        slider.style.transition = "none";
        return;
    }
    operation = operation - widthImg;
    slider.style.transform = `translate(-${operation}%)`;
    slider.style.transition = "all ease .6s"


}   