const smallLibrary = [];

const diplayCard = document.querySelector("#displayCard");

function Book(name, author, nPages, hasRead) {
    this.name = name,
    this.author = author,
    this.nPages = nPages,
    this.hasRead = hasRead;

};

function addToLibrary(...books) {
    books.forEach((book) => smallLibrary.push(book));
};

function displayItems() {
    smallLibrary.forEach((book, index) => {
        const content = document.createElement('div');
        content.textContent = `${index + 1}. ${book.name}, ${book.author}, ${book.nPages}, ${book.hasRead}.\n`;
        diplayCard.append(content);
    })
};


const book1 = new Book('Catch 22', 'Joseph Heller', '624 Pages', 'Have read: Yes');
const book2 = new Book('Catch 23', 'Joseph Heller', '624 Pages', 'Have read: Yes');
const book3 = new Book('Catch 24', 'Joseph Heller', '624 Pages', 'Have read: Yes');
const book4 = new Book('Catch 25', 'Joseph Heller', '624 Pages', 'Have read: Yes');
const book5 = new Book('Catch 26', 'Joseph Heller', '624 Pages', 'Have read: Yes');
const book6 = new Book('Catch 27', 'Joseph Heller', '624 Pages', 'Have read: Yes');


addToLibrary(book1, book2, book3, book4, book5, book6);

displayItems();

