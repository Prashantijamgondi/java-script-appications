let todoItemsContainer = document.getElementById("todoItemsContainer");
let todoList = [{
        text: "Learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    }
];
let TotalLength = todoList.length;

function onChangeFeature(labelId, checkId) {
    let listItem = document.getElementById(labelId);
    let checkItem = document.getElementById(checkId);
    if (checkItem.checked) {
        listItem.classList.add("checked");
    } 
    else {
        listItem.classList.remove("checked");
    }
}

function onDelete(listItemss) {
    let listElement = document.getElementById(listItemss);
    todoItemsContainer.removeChild(listElement);
}

function createAndAppendTodo(todo) {

    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = "list" + todo.uniqueNo;
    todoItemsContainer.appendChild(todoElement);

    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput" + todo.uniqueNo;
    inputElement.classList.add("checkbox-input");
    inputElement.onclick = function() {
        onChangeFeature("label" + todo.uniqueNo, "checkboxInput" + todo.uniqueNo)
    }
    todoElement.appendChild(inputElement);

    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput" + todo.uniqueNo);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    labelElement.id = "label" + todo.uniqueNo;
    labelContainer.appendChild(labelElement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    deleteIconContainer.onclick = function() {
        onDelete("list" + todo.uniqueNo)
    }
    labelContainer.appendChild(deleteIconContainer);

    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}

let buttonElement = document.getElementById("addTodoButton");

buttonElement.onclick = function() {
    let inputFromUser = document.getElementById("todoUserInput");
    let textValue = inputFromUser.value;
    if (TotalLength > 2) {
        TotalLength += 1;
    }
    let todoMore = {
        text: textValue,
        uniqueNo: TotalLength
    }
    createAndAppendTodo(todoMore);
    inputFromUser.value = "";
}