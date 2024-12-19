let formid = document.getElementById("questionsForm");
let hyderabad = document.getElementById("cityHyderabad");
let chennai = document.getElementById("cityChennai");
let delhi = document.getElementById("cityDelhi");
let mumbai = document.getElementById("cityMumbai");
let msg = document.getElementById("resultMsg");

let city = {
    c: "on"
}

hyderabad.addEventListener("change", function(event) {
    city.c = event.target.value;
    if (city.c === "on") {
        city.c = "hyderabad";
    }
    console.log(city.c);
})
chennai.addEventListener("change", function(event) {
    city.c = event.target.value;
    if (city.c === "on") {
        city.c = "chennai";
    }
    console.log(city.c);
})
delhi.addEventListener("change", function(event) {
    city.c = event.target.value;
    if (city.c === "on") {
        city.c = "delhi";
    }
    console.log(city.c);
})
mumbai.addEventListener("change", function(event) {
    city.c = event.target.value;
    if (city.c === "on") {
        city.c = "mumbai";
    }
    console.log(city.c);
})

formid.addEventListener("submit", function(event) {
    event.preventDefault();
    if (city.c === "delhi") {
        msg.textContent = "Correct answer";
        msg.style.color = "green"
    } else if (city.c !== "on") {
        msg.textContent = "Wrong Answer"
        msg.style.color = "red";
    } else {
        msg.textContent = "Please Select Option"
        msg.style.color = "red";
    }
})