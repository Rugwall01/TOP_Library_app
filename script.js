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
        const text = document.createElement('p');
        content.classList.add("dispCont");
        text.classList.add("cardText");
        content.gridArea = "cont";
        text.textContent = `${index + 1}. ${book.name}, ${book.author}, ${book.nPages}, ${book.hasRead}.`;
        content.append(text);
        diplayCard.append(content);
    });
};



function initBookList() {
    for(i=0; i<=17; i++) {
        generatedBookList[i + 1] = new Book(`Catch ${22 + i}`, 'Joseph Heller', '624 Pages', 'Have read?: Yes');
        addToLibrary(generatedBookList[i + 1]);
    };
};


initBookList();

displayItems();



