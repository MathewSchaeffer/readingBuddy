const dialogButton = document.getElementById("dialogBoxButton");
const dialogButtonCancel = document.getElementById("dialogBoxButtonCancel");
const dialog = document.getElementById("dialogBox");
const addBookButton = document.getElementById("addBook");
let inputTitle = document.getElementById("title");
let inputAuthor = document.getElementById("author");
const myLibrary = [];

// constructor

function Book(author, title) {
    this.author = author;
    this.title = title;
}

myLibrary.push(newBook = new Book("Steven", "Jurassic Dorks"));
myLibrary.push(newBook = new Book("Frank", "Jurassic Dorks II: The unofficial Autobiography of Automomous Jane"));


function updateList() {
    const shelf = document.getElementById("shelf");
    shelf.replaceChildren();
    for (books of myLibrary) {
        newLi = document.createElement("li");
        newLi.innerText = `${books.author}, ${books.title}`;
        shelf.append(newLi);
    }
}

// dummy data

addBookButton.addEventListener("click", function (e) {
    dialog.showModal();
})

dialogButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (inputTitle.value.length === 0 || inputAuthor.value.length === 0) {
        if (inputAuthor.value.length === 0) {
            console.log("Insert Author Name");
        }
        if (inputTitle.value.length === 0) {
            console.log("Insert Title");
        }
    } else {
        myLibrary.push(newBook = new Book(inputAuthor.value, inputTitle.value));
        updateList();
        inputAuthor.value = "";
        inputTitle.value = "";
        // console.log(inputTitle.value);
        // console.log(inputAuthor.value);
        dialog.close();
    }

});

dialogButtonCancel.addEventListener("click", function (e) {
    e.preventDefault();
    dialog.close();
});

updateList();


