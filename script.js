const smallLibrary = [];

const diplayCard = document.querySelector("#displayCard");

function Book(name, author, nPages, hasRead) {
    this.name = name,
    this.author = author,
    this.nPages = nPages,
    this.hasRead = hasRead;

}

function addToLibrary(book) {
    smallLibrary.push(book);

}

smallLibrary.forEach((book) => diplayCard.append(`${book.name}, ${book.author}, ${book.nPages}, ${book.hasRead}`));