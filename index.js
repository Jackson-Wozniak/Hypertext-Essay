import getEntryHTML from "/entries.js";

let pagesRead = 0;
let totalPages = 10;

let titlesPagesRead = [];

const pageCounterDiv = document.getElementById("page-counter");
const entryPopupWindowDiv = document.getElementById("entry-popup-window");
const entryContentDiv = document.getElementById("entry-content");
pageCounterDiv.textContent = `${pagesRead} / ${totalPages} read`;

document.querySelectorAll(".entry-window").forEach(div => {
    div.addEventListener("click", () => {
        const entryName = div.dataset.entry;
        openEntryWindow(entryName);
    });
});

document.getElementById("entry-close-button").addEventListener("click", () => closeEntryWindow());

function incrementCounter(){
    if(pagesRead + 1 >= totalPages){
        pageCounterDiv.textContent = 'How do computers work?';
        pageCounterDiv.className = 'counter-complete';
        return;
    }
    pagesRead++;
    pageCounterDiv.textContent = `${pagesRead} / ${totalPages} read`;
}

function setPageRead(pageName){
    if(!titlesPagesRead.includes(pageName)){
        incrementCounter();
        titlesPagesRead.push(pageName);
        let tempEntry = document.getElementById("hello-world-window");
        tempEntry.classList.remove('entry-unread');
        tempEntry.classList.add('entry-read');
    }
}

function openEntryWindow(pageName){
    setPageRead(pageName);
    entryPopupWindowDiv.classList.add("visible");

    entryContentDiv.innerHTML = getEntryHTML(pageName);
}

function closeEntryWindow(){
    entryPopupWindowDiv.hidden = true;
    entryPopupWindowDiv.classList.remove("visible");
    entryContentDiv.innerHTML = ``;
}
