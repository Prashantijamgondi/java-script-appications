let image = document.getElementById("puppyImage");
let thumb = document.getElementById("likeIcon");
let button = document.getElementById("likeButton");

let likednot = false;

function onClickLikeButton() {
    if (likednot === true) {
        image.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        thumb.style.color = "#9aa5b1";
        button.style.backgroundColor = "white";
        button.style.color = "#9aa5b1";
        likednot = false;
    } else {
        image.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        thumb.style.color = "#0967d2";
        button.style.backgroundColor = "#0967d2";
        button.style.color = "white";
        likednot = true;
    }
}