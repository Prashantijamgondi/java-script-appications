let containerBook = document.getElementById("searchResults");

let searchElement = document.getElementById("searchInput");

let subContainerRow = document.createElement("div");
subContainerRow.classList.add("row", "m-3");
containerBook.appendChild(subContainerRow);

function print_all_books(jsonData) {
    console.log(jsonData);
    for (let item of jsonData.search_results) {
        let book = document.createElement("div");
        book.classList.add("d-flex", "row", "col-5");
        book.style.margin = "10px";
        book.style.marginTop = "10px";
        subContainerRow.appendChild(book);

        let booking = document.createElement("img");
        booking.src = item.imageLink;
        book.appendChild(booking);

        let para = document.createElement("p");
        para.style.fontSize = "20px";
        para.textContent = item.author;
        book.appendChild(para);
    }
}

function get_moreinfo() {
    let subparts = document.createElement("div");
    subparts.classList.add("col-12", "col-md-5");
    containerBook.appendChild(subparts);
    
    let bodyPart = document.createElement("div");
    let searchElementValue = searchElement.value;
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/book-store?title=" + searchElementValue, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            print_all_books(jsonData);
        });
}

searchElement.addEventListener("change", get_moreinfo);