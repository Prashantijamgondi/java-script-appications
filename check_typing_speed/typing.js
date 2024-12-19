let buttonElement = document.getElementById("submitBtn");
let resetButtonEl = document.getElementById("resetBtn");
let time = document.getElementById("timer");
let input = document.getElementById("quoteInput");
let display_words = document.getElementById("quoteDisplay");
let msg = document.getElementById("result");
let spinner = document.getElementById("spinner");

let ctime = 0;
let uniqueTime = setInterval(function() {
    ctime = ctime + 1;
    time.textContent = ctime;
}, 1000);

function print(das) {
    buttonElement.addEventListener("click", function() {
        let inputValue = input.value;
        if (das === inputValue) {
            msg.textContent = "You Entered correct text in " + ctime + " seconds";
            msg.style.color="green";
            clearInterval(uniqueTime);
        } else {
            msg.textContent = "You typed Incorrect Sentences";
            msg.style.color="red";
        }
    })
}

let options = {
    method: "GET"
}
spinner.classList.remove("d-none");
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let das = jsonData.content;
        spinner.classList.add("d-none");
        display_words.textContent = das;
        print(das);
    });

resetButtonEl.addEventListener("click", function() {
    clearInterval(uniqueTime);
    ctime = 0;
    uniqueTime = setInterval(function() {
        ctime = ctime + 1;
        time.textContent = ctime;
    }, 1000);
})