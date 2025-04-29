import gettingLostEntryHTML from "./entry_files/GettingLost.js";
import helloWorldEntryHTML from "./entry_files/HelloWorld.js";
import javaBasicsEntryHTML from "./entry_files/JavaBasics.js";
import javaScriptBasicsEntryHTML from "./entry_files/JavaScriptBasics.js";
import learningAPIsEntryHTML from "./entry_files/LearningAPIs.js";
import myFirstProjectEntryHTML from "./entry_files/MyFirstProject.js";

let pagesRead = 0;
let totalPages = 14;

let titlesPagesRead = [];

const pageCounterDiv = document.getElementById("page-counter");
const entryPopupWindowDiv = document.getElementById("entry-popup-window");
const entryContentDiv = document.getElementById("entry-content");
pageCounterDiv.textContent = `${pagesRead} / ${totalPages} read`;

window.addEventListener('popstate', (event) => {
    // This is triggered when user presses back/forward, allowing us to go back to home page from an entry
    closeEntryWindow();
});

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

    history.pushState({}, '', '');
}

function closeEntryWindow(){
    entryPopupWindowDiv.hidden = true;
    entryPopupWindowDiv.classList.remove("visible");
    entryContentDiv.innerHTML = ``;
}

function getEntryHTML(entryName){
    switch(entryName){
        case "hello_world": return helloWorldEntryHTML();
        case "java_basics": return javaBasicsEntryHTML();
        case "learning_apis": return learningAPIsEntryHTML();
        case "getting_lost": return gettingLostEntryHTML();
        case "my_first_big_project": return myFirstProjectEntryHTML();
        case "javascript_basics": return javaScriptBasicsEntryHTML();
        default:  return `<h1>Entry With Name (${entryName}) Not Found! </h1>`;
    }
}
