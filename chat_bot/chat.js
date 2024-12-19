let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInput = document.getElementById("userInput");
let msgSendBtn = document.getElementById("sendMsgBtn");
let emptyDiv = document.getElementById("chatContainer");

msgSendBtn.onclick = function() {
    let userInputValue = userInput.value;
    let randomInt = Math.ceil(Math.random() * 6);

    let toParagrapContainer = document.createElement("div");
    toParagrapContainer.classList.add("msg-to-chatbot-container");
    emptyDiv.appendChild(toParagrapContainer);

    let toParagrap = document.createElement("p");
    toParagrap.classList.add("msg-to-chatbot");
    toParagrap.textContent = userInputValue;
    toParagrapContainer.appendChild(toParagrap);

    let fromParagrapContainer = document.createElement("div");
    fromParagrapContainer.classList.add("msg-from-chatbot-container");
    emptyDiv.appendChild(fromParagrapContainer);

    let fromParagrap = document.createElement("p");
    fromParagrap.classList.add("msg-from-chatbot");
    fromParagrap.textContent = chatbotMsgList[randomInt];
    fromParagrapContainer.appendChild(fromParagrap);

    userInput.value = "";
}