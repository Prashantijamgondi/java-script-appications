let userInputs = document.getElementById("userInput");
let paragrapElement = document.getElementById("fact");
let spinnerE1 = document.getElementById("spinner");

function dynamicPrinting(event) {
    let inputElementValue = userInputs.value;
    let options = {
        method: "GET"
    }
    spinnerE1.classList.remove("d-none");
    paragrapElement.textContent = "";
    fetch("https://apis.ccbp.in/numbers-fact?number=" + inputElementValue, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerE1.classList.add("d-none");
            paragrapElement.textContent = JSON.stringify(jsonData.fact)
        })
}

userInputs.addEventListener("keyup", dynamicPrinting);