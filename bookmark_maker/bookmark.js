// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/
let formElement = document.getElementById("bookmarkForm");
let inputSite = document.getElementById("siteNameInput");
let inputUrl = document.getElementById("siteUrlInput");
let siteMsg = document.getElementById("siteNameErrMsg");
let urlMsg = document.getElementById("siteUrlErrMsg");

let ul = document.getElementById("bookmarksList");

inputSite.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteMsg.textContent = "*Required";
    } else {
        siteMsg.textContent = '';
    }
})

inputUrl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        urlMsg.textContent = "*Required"
    } else {
        urlMsg.textContent = ''
    }
})

function getprint(event){
    let inputSiteName = inputSite.value;
    let inputSiteUrl = inputUrl.value;
    if(inputSiteName==="") return;
    if(inputSiteUrl==="") return;

    let listElement = document.createElement("li");
    listElement.classList.add("listClass");
    ul.appendChild(listElement);

    let headingElement = document.createElement("h5");
    headingElement.textContent = inputSiteName;
    listElement.appendChild(headingElement);

    let anchorElement = document.createElement("a");
    anchorElement.textContent = inputSiteUrl;
    anchorElement.href = inputSiteUrl;
    anchorElement.target = "_blank";
    listElement.appendChild(anchorElement);
}

formElement.addEventListener("submit", function(event) {
    event.preventDefault();
    getprint(event);
})