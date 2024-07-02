let imageElement = document.getElementById("image");
let warningMessage = document.getElementById("warningMessage");
let imgWidth = document.getElementById("imageWidth");
imgWidth.textContent = '200px';
let defaultImageWidth = 200;
let originalValue = defaultImageWidth;
imageElement.style.width = defaultImageWidth + 'px';


function incrementButton() {
    let updatedValue = originalValue + 5;
    if (originalValue >= 300) {
        warningMessage.textContent = "Too high, length is not extended."
    } else {
        warningMessage.textContent = '';
        imgWidth.textContent = updatedValue + 'px';
        imageElement.style.width = updatedValue + 'px';
        originalValue = updatedValue;
    }
}

function decrementButton() {
    if (originalValue <= 100) {
        warningMessage.textContent = "Too low, length is not compressed."
    } else {
        let updatedValue = originalValue - 5;
        imageElement.style.width = updatedValue + 'px';
        imgWidth.textContent = updatedValue + 'px';
        warningMessage.textContent = '';
        imageElement.style.width = updatedValue + 'px';
        originalValue = updatedValue;
    }
}