/*

ReadingBuddy by Mathew Schaeffer 2024
for the Odin Project

*/

const dialogButton = document.getElementById("dialogBoxButton");
const dialogButtonCancel = document.getElementById("dialogBoxButtonCancel");
const dialog = document.getElementById("dialogBox");
const addBookButton = document.getElementById("addBook");
let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
let checkBox = document.getElementById("checkBox");
const myLibrary = [];

function Book(author, title, read) {
    this.author = author;
    this.title = title;
    this.read = read;
}

function updateList() {
    const shelf = document.getElementById("shelf");
    shelf.replaceChildren();
    for (let [index, books] of myLibrary.entries()) {
        let newLi = document.createElement("li");
        let newButton = document.createElement("button");
        let newButtonText = "";
        let newDiv = document.createElement("div");
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Remove Item";
        shelf.append(newDiv);
        newLi.innerText = `${books.title}, by ${books.author}`;
        newDiv.classList.add("listItem");
        newDiv.append(newButton);
        newDiv.append(newLi);
        newDiv.append(deleteButton)
        newLi.setAttribute("data-id", index);

        newButtonText = books.read ? "Read" : "Not Read";
        newButton.innerText = newButtonText;

        newButton.addEventListener("click", function (e) {
            if (books.read) {
                books.read = false;
                newButtonText = "Not Read";
            } else {
                books.read = true;
                newButtonText = "Read";
            }
            newButton.innerText = newButtonText;
            console.log(`${books.title} : Read: ${books.read}`)
        });

        deleteButton.addEventListener("click", function (e) {
            console.log(`delete button pressed for ${books.title}`)
            myLibrary.splice(index, 1);
            updateList();
        });
    }
}

// dummy data
myLibrary.push(newBook = new Book("Steven Hernio", "Jurassic Ducks", true));
myLibrary.push(newBook = new Book("Steven Hernio", "Jurassic Ducks II", false));
myLibrary.push(newBook = new Book("Bigly Bob Gorbo", "The Art of Nuclear War", false))

addBookButton.addEventListener("click", function (e) {
    inputAuthor.value = "";
    inputTitle.value = "";
    checkBox.checked = false;
    dialog.showModal();
})

dialogButton.addEventListener("click", function (e) {
    e.preventDefault();

    let isRead = checkBox.checked ? true : false;

    if (inputTitle.value.length === 0 || inputAuthor.value.length === 0) {
        if (inputAuthor.value.length === 0) {
            alert("Insert Author Name");
        }
        if (inputTitle.value.length === 0) {
            alert("Insert Title");
        }
    } else {
        myLibrary.push(newBook = new Book(inputAuthor.value, inputTitle.value, isRead));
        updateList();
        dialog.close();
    }
});

dialogButtonCancel.addEventListener("click", function (e) {
    e.preventDefault();
    dialog.close();
});

updateList();