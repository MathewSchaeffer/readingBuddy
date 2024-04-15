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
        let newButtonText = ""
        newButton.innerText = `${books.read}`;
        newLi.innerText = `${books.title}, ${books.author}  `;
        shelf.append(newLi);
        newLi.append(newButton);
        newButton.classList.add("toggleButton");
        newButton.setAttribute("data-id", index);
        // console.dir(newButton.dataset.id);
        if (books.read) {

            newButtonText = "Read";
        } else {

            newButtonText = "Not  Read ";
        }
        newButton.innerText = newButtonText;
        newButton.addEventListener("click", function (e) {
            // console.log(`Read Button pressed for ${books.title}`);
            if (books.read) {
                books.read = false;
                newButtonText = "Not Read";
            } else {
                books.read = true;
                newButtonText = " Read ";
            }
            newButton.innerText = newButtonText;
            console.log(`${books.title} : Read: ${books.read}`)
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
    let isRead = undefined
    if (checkBox.checked) {
        isRead = true;
    } else {
        isRead = false;
    }
    if (inputTitle.value.length === 0 || inputAuthor.value.length === 0) {
        if (inputAuthor.value.length === 0) {
            console.log("Insert Author Name");
        }
        if (inputTitle.value.length === 0) {
            console.log("Insert Title");
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


