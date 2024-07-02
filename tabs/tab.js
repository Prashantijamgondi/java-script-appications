let aboutBtn = document.getElementById("aboutButton");
let timeBtn = document.getElementById("timeToVisitButton");
let attractionsBtn = document.getElementById("attractionsButton");

let aboutTab1 = document.getElementById("aboutTab");
let timeTab1 = document.getElementById("timeToVisitTab");
let attractionTab1 = document.getElementById("attractionsTab");

timeTab1.classList.add("d-none");
attractionTab1.classList.add("d-none");

function aboutButtons() {
    aboutTab1.classList.remove("d-none");
    timeTab1.classList.add("d-none");
    attractionTab1.classList.add("d-none");

    aboutBtn.classList.add("selected-button");
    timeBtn.classList.remove("selected-button");
    attractionsBtn.classList.remove("selected-button");
}

function timeToVisitButton() {
    aboutTab1.classList.add("d-none");
    timeTab1.classList.remove("d-none");
    attractionTab1.classList.add("d-none");

    aboutBtn.classList.remove("selected-button");
    timeBtn.classList.add("selected-button");
    attractionsBtn.classList.remove("selected-button");
}

function attractionsButtonss() {
    aboutTab1.classList.add("d-none");
    timeTab1.classList.add("d-none");
    attractionTab1.classList.remove("d-none");

    aboutBtn.classList.remove("selected-button");
    timeBtn.classList.remove("selected-button");
    attractionsBtn.classList.add("selected-button");
}