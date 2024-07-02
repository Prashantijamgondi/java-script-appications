let searchElement = document.getElementById("searchInput");
let searchResult = document.getElementById("searchResults");
let loading = document.getElementById("spinner");

function get_information(element) {

    let searchElementContainer = document.createElement("div");
    searchElementContainer.classList.add("result-item")
    searchResult.appendChild(searchElementContainer);

    let nameElement = document.createElement("a");
    let {
        link,
        title,
        description
    } = element;
    nameElement.href = link;
    nameElement.textContent = title;
    nameElement.classList.add("result-title");
    searchElementContainer.appendChild(nameElement);

    let breakE1 = document.createElement("br");
    searchElementContainer.appendChild(breakE1);

    let linkElement = document.createElement("a");
    linkElement.href = link;
    linkElement.classList.add("result-url");
    linkElement.textContent = link;
    searchElementContainer.appendChild(linkElement)

    let breakE2 = document.createElement("br");
    searchElementContainer.appendChild(breakE2);

    let desc = document.createElement("p");
    desc.classList.add("link-description");
    desc.textContent = description;
    searchElementContainer.appendChild(desc);

}

function information_serch(data) {
    searchResult.textContent = "";
    loading.classList.add("d-none");
    for (let element of data.search_results) {
        get_information(element)
    }
}

function information(event) {
    if (event.key === "Enter") {
        let searchValue = searchElement.value;
        loading.classList.remove("d-none");
        let optins = {
            method: "GET"
        }
        fetch("https://apis.ccbp.in/wiki-search?search=" + searchValue, optins)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                information_serch(jsonData)
            });
    }
}

searchElement.addEventListener("keydown", information)