let backgroundColor = document.getElementById("bgColorInput");
let fontColor = document.getElementById("fontColorInput");
let fontSize = document.getElementById("fontSizeInput");
let fontWeight = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let borderRadius = document.getElementById("borderRadiusInput");

let customBtn = document.getElementById("customButton");

function createButton() {
    customBtn.style.backgroundColor = backgroundColor.value;
    customBtn.style.color = fontColor.value;
    customBtn.style.fontSize = fontSize.value;
    customBtn.style.fontWeight = fontWeight.value;
    customBtn.style.padding = padding.value;
    customBtn.style.borderRadius = borderRadius.value;
}