const smallLibrary = [];
const generatedBookList = [];

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
        content.classList.add("dispCont");
        content.gridArea = "cont";
        content.textContent = `${index + 1}. ${book.name}, ${book.author}, ${book.nPages}, ${book.hasRead}.`;
        diplayCard.append(content);
    });
};


// const book1 = new Book('Catch 22', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book2 = new Book('Catch 23', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book3 = new Book('Catch 24', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book4 = new Book('Catch 25', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book5 = new Book('Catch 26', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book6 = new Book('Catch 27', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book7 = new Book('Catch 28', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book8 = new Book('Catch 29', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book9 = new Book('Catch 30', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book10 = new Book('Catch 31', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book11 = new Book('Catch 32', 'Joseph Heller', '624 Pages', 'Have read: Yes');
// const book12 = new Book('Catch 33', 'Joseph Heller', '624 Pages', 'Have read: Yes');

function initBookList() {
    for(i=0; i<=17; i++) {
        generatedBookList[i + 1] = new Book(`Catch ${22 + i}`, 'Joseph Heller', '624 Pages', 'Have read?: Yes');
        addToLibrary(generatedBookList[i + 1]);
    };
};


initBookList();

displayItems();

