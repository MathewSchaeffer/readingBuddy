const dialogButton = document.getElementById("dialogBoxButton");
const dialog = document.getElementById("dialogBox");
const addBookButton = document.getElementById("addBook");

addBookButton.addEventListener("click", function (e) {
    dialog.showModal();
})

dialogButton.addEventListener("click", function (e) {
    e.preventDefault();
    dialog.close();
});

