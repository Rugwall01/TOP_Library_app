const smallLibrary = [];
const generatedBookList = [];
const LIBRARY = [];
// const bookInput = document.querySelector()

const diplayCard = document.querySelector("#displayCard");
// const displayCardCont = document.querySelectorAll('.dispCont');

const form = document.querySelector("form");
const titleInp = document.querySelector("#title");
const authorInp = document.querySelector("#author");
const numPagesInp = document.querySelector("#pages");
const hasReadInp = document.querySelector("#hasRead");
const hasReadNoInp = document.querySelector("#hasReadNo");
const submitBtn = document.querySelector(".submitBtn"); 




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
    diplayCard.innerHTML = '';
    smallLibrary.forEach((book, index) => {
        const content = document.createElement('div');
        const text = document.createElement('p');
        const bookSpine = document.createElement('div');
        bookSpine.classList.add("spine");
        content.classList.add("dispCont");
        text.classList.add("cardText");
        bookSpine.gridArea = "spine";
        content.gridArea = "cont";
        text.textContent = '';
        const parts = `${index + 1}. ${book.name}, ${book.author}, ${book.nPages}, ${book.hasRead}.`.split(',');

        parts.forEach((part, i) => {
            text.append(part.trim());
            if(i < parts.length - 1) {
                text.append(',');
                text.append(document.createElement('br'));
            }
        });
        
        // const xhRequest = new XMLHttpRequest();
        // xhRequest.open("GET", "assets/bookmark.svg", true);
        // xhRequest.responseType = "document";

        // xhRequest.onload = function() {
        //     if(this.status === 200) {
        //         const bookMark = this.responseXML.documentElement;
        //         bookMark.classList.add("bookMark");
        //         bookSpine.append(bookMark);

        //     }
        // };

        // xhRequest.send();

    //     fetch("assets/bookmark.svg")
    // .then((response) => {
    //     if (!response.ok) throw new Error("Failed to load SVG");
    //     return response.text();
    // })
    // .then((svgText) => {
    //     const parser = new DOMParser();
    //     const svgDoc = parser.parseFromString(svgText, "image/svg+xml");
    //     const bookMark = svgDoc.documentElement;
    //     bookMark.classList.add("bookMark");
    //     bookSpine.appendChild(bookMark);
    // })
    // .catch((error) => console.error("Error loading SVG:", error));
    
        
//         const bookMarkSVG = `<svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="60"
//     height="180"
//     viewBox="0 0 60 180"
//     fill="whitesmoke"
//     stroke="whitesmoke"
//     stroke-width="2">
//   <rect x="0" y="0" width="60" height="180" fill="whitesmoke" stroke="whitesmoke" />
//  <polygon points="0,180 30,160 60,180" fill="transparent" stroke="blue" /> 

  
// </svg>`;
{/* <polygon points="0,160 30,180 60,160" fill="blue" /> */}

const bookMarkSVG = `<svg     xmlns="http://www.w3.org/2000/svg"
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
</svg>`



        
        // `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark">
        //                     <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
        //                  </svg>`;
        
        const bookMark = document.createElement('div');
        bookMark.innerHTML = bookMarkSVG;
        bookMark.classList.add("bookMark");
        bookMark.firstChild.classList.add("bookMarkSVG");
        bookSpine.append(bookMark.firstChild);
 
        content.append(text);
        content.append(bookSpine);
        diplayCard.append(content);

        LIBRARY.push(book);
    });

};



function initBookList() {
    for(i=0; i<=17; i++) {
        generatedBookList[i + 1] = new Book(`Catch ${22 + i}`, 'Joseph Heller', '624 Pages', 'Have read?: Yes');
        addToLibrary(generatedBookList[i + 1]);
    };
};

function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
};





// submitBtn.addEventListener("click", (e) => {
    
//     if(!form.validity.valid){
//         e.preventDefault();
//     }
//     // if(form.validity.valid){

//     let hasReadStatus;

//     if(hasReadInp.checked && !hasReadNoInp.checked){
//         hasReadStatus = 'Have read?: Yes';
//     }else if(hasReadNoInp.checked && !hasReadInp.checked){
//         hasReadStatus = 'Have read?: No';
//     }else if(!hasReadInp.checked && !hasReadNoInp.checked){
//         e.preventDefault();
//         return;
//     };

//     const userEntry = new Book(titleInp.value, authorInp.value, numPagesInp.value, hasReadStatus);

//     addToLibrary(userEntry);

//     titleInp.value = '';
//     authorInp.value = '';
//     numPagesInp.value = '';
//     hasReadInp.checked = false;
//     hasReadNoInp.checked = false;

//     // };

//     displayItems();
//     togglePopup();

// });


submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // if (!titleInp.value || !authorInp.value || !numPagesInp.value) {
    //     ("All fields are required!");
    //     return;
    // }

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
        }
    }

    if (!hasReadInp.checked && !hasReadNoInp.checked) {
        hasReadInp.setCustomValidity("Please select a read status.");
        hasReadInp.reportValidity();
        return;
    }

    let hasReadStatus = hasReadInp.checked ? 'Have read?: Yes' : 'Have read?: No';

    const userEntry = new Book(titleInp.value, authorInp.value, numPagesInp.value, hasReadStatus);

    addToLibrary(userEntry);

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

// function addBook() {

// }

// initBookList();







