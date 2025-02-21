// Thanks to geeksforgeeks for their tutorial on popups and hidden elements


const libraryStacks = {
    smallLibrary: [],
    generatedBookList: [],
    LIBRARY: [], // for storage/history later
}

const displayCard = document.querySelector("#displayCard");

const form = document.querySelector("form");
const titleInp = document.querySelector("#title");
const authorInp = document.querySelector("#author");
const numPagesInp = document.querySelector("#pages");
const hasReadInp = document.querySelector("#hasRead");
const hasReadNoInp = document.querySelector("#hasReadNo");
const submitBtn = document.querySelector(".submitBtn"); 


class Book {
    constructor(name, author, nPages, hasRead) {
        this.name = name,
        this.author = author,
        this.nPages = nPages,
        this.hasRead = hasRead;
    }
};

function addToLibrary(...books) {
    books.forEach((book) => libraryStacks.smallLibrary.push(book));
};

function displayItems() {
    displayCard.innerHTML = '';
    const fragment = document.createDocumentFragment();

    libraryStacks.smallLibrary.forEach((book, index) => {
        const bookSpine = document.createElement('div');
        const content = document.createElement('div');
        const text = document.createElement('p');
        const span = document.createElement('span');

        bookSpine.classList.add("spine");
        content.classList.add("dispCont");
        text.classList.add("cardText");
        span.classList.add("textSpan");
        // bookSpine.style.gridArea = "spine";
        // content.gridArea = "cont";
        text.setAttribute('data-index', index);
        text.textContent = '';

        const parts = `${index + 1}. ${book.name}, By: ${book.author}, ${book.nPages} pages, ${book.hasRead}.`.split(',');

        parts.forEach((part, i) => {
            span.append(part.trim());
            if(i < parts.length - 1) {
                span.append(',');
                span.append(document.createElement('br'));
            }
        });

        text.append(span);
        
        

        const bookMarkSVG = `<svg xmlns="http://www.w3.org/2000/svg"
                width="60"
            height="180"
            viewBox="0 0 60 180">
            
        <defs>
            <mask id="cutout-mask">
            <rect x="0" y="0" width="60" height="180" fill="white" />
            <polygon points="0,180 30,160 60,180" fill="black" stroke="blue" />
                
            </mask>
        </defs>

            
        <rect x="0" y="0" width="60" height="180" fill="whitesmoke" mask="url(#cutout-mask)" />
        </svg>`;


        const trashCanSVG = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                            </svg>`;


        const bookMark = document.createElement('div');
        bookMark.innerHTML = bookMarkSVG;
        bookMark.classList.add("bookMark");
        bookMark.firstChild.classList.add("bookMarkSVG");
        bookSpine.append(bookMark.firstChild);

        const trashCan = document.createElement('div');
        trashCan.innerHTML = trashCanSVG;
        trashCan.classList.add("trashCan");
        trashCan.firstChild.classList.add("trashCanSVG");
        trashCan.firstChild.setAttribute('data-index', index);
        content.append(trashCan.firstChild);
    
        content.append(text);
        content.append(bookSpine);
        fragment.append(content);

        // libraryStacks.LIBRARY.push(book);
        

    });
    
    displayCard.append(fragment);

};



function initBookList() {
    for(let i = 0; i <= 17; i++) {
        libraryStacks.generatedBookList[i + 1] = new Book(`Catch ${22 + i}`, 'Joseph Heller', '624', 'Have read?: Yes');
        addToLibrary(libraryStacks.generatedBookList[i + 1]);
    };
};

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
};



submitBtn.addEventListener("click", (e) => {
    e.preventDefault();


    const inputs = [
        { field: titleInp, message: "Title is required." },
        { field: authorInp, message: "Author is required." },
        { field: numPagesInp, message: "Number of pages is required." }
    ];

    inputs.forEach((input) => input.field.setCustomValidity(""));

    for (const input of inputs) {
        if (!input.field.value.trim()) {
            input.field.setCustomValidity(input.message);
            input.field.reportValidity();
            return; 
        };


        


        const inpArray = input.field.value.split('');


        const longEntry = inpArray.some((inp) => {
            return inp.length >= 13 ? true : false;
        
        });  

        if (longEntry) {
            input.field.setCustomValidity("Individual word or whole entry is too long!");
            input.field.reportValidity();
            return

        };

    };


    if (!hasReadInp.checked && !hasReadNoInp.checked) {
        hasReadInp.setCustomValidity("Please select a read status.");
        hasReadInp.reportValidity();
        return;
    }

    let hasReadStatus = hasReadInp.checked ? 'Have read?: Yes' : 'Have read?: No';

    const userEntry = new Book(titleInp.value, authorInp.value, numPagesInp.value, hasReadStatus);


    libraryStacks.smallLibrary.unshift(userEntry);

    form.reset();

    displayItems();
    togglePopup();
});

const inputs = [titleInp, authorInp, numPagesInp, hasReadInp];
inputs.forEach((input) => {
    input.addEventListener("input", () => {
        input.setCustomValidity("");
    });
});


displayCard.addEventListener("click", (e) => {
    const genCardText = e.target.closest('p');
    if (!genCardText) return;

    const index = genCardText.getAttribute('data-index');
    if (index !== null) {
    libraryStacks.smallLibrary[index].hasRead = libraryStacks.smallLibrary[index].hasRead === 'Have read?: Yes' ? 'Have read?: No' : 'Have read?: Yes';
    
    displayItems();
    };
});


document.body.addEventListener("click", (e) => {
    

    const trash = e.target.closest('svg'); 
    if (!trash) return;

    const index = trash.getAttribute('data-index'); 
    if (index !== null) {
        libraryStacks.smallLibrary.splice(index, 1); 
        displayItems(); 
    };
});

initBookList();

displayItems();













