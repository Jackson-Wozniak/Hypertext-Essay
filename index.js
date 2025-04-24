import helloWorldEntryHTML from "./entry_files/HelloWorld.js";

let pagesRead = 0;
let totalPages = 14;

let titlesPagesRead = [];

const pageCounterDiv = document.getElementById("page-counter");
const entryPopupWindowDiv = document.getElementById("entry-popup-window");
const entryContentDiv = document.getElementById("entry-content");
pageCounterDiv.textContent = `${pagesRead} / ${totalPages} read`;

document.querySelectorAll(".entry-window").forEach(div => {
    div.addEventListener("click", () => {
        openEntryWindow(div.dataset.entry, div.id);
    });
});

document.getElementById("entry-close-button").addEventListener("click", () => closeEntryWindow());

function incrementCounter(){
    if(pagesRead + 1 >= totalPages){
        pageCounterDiv.textContent = 'How do computers work?';
        pageCounterDiv.className = 'counter-complete';
        pageCounterDiv.addEventListener("click", () => {
            openEntryWindow("how_computers_work", "page-counter")
        });
        return;
    }
    pagesRead++;
    pageCounterDiv.textContent = `${pagesRead} / ${totalPages} read`;
}

function setPageRead(pageName, id){
    if(!titlesPagesRead.includes(pageName)){
        incrementCounter();
        if(pageName == "how_computers_work") return;
        titlesPagesRead.push(pageName);
        let tempEntry = document.getElementById(id);
        tempEntry.classList.remove('entry-unread');
        tempEntry.classList.add('entry-read');
    }
}

function openEntryWindow(pageName, id){
    setPageRead(pageName, id);
    entryPopupWindowDiv.classList.add("visible");

    entryContentDiv.innerHTML = getEntryHTML(pageName);
}

function closeEntryWindow(){
    entryPopupWindowDiv.hidden = true;
    entryPopupWindowDiv.classList.remove("visible");
    entryContentDiv.innerHTML = ``;
}

function getEntryHTML(entryName){
    switch(entryName){
        case "hello_world": return helloWorldEntryHTML();
        default:  return `<h1>Entry With Name (${entryName}) Not Found! </h1>`;
    }
}
