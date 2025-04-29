import gettingLostEntryHTML from "./entry_files/java_branch/GettingLost.js";
import helloWorldEntryHTML from "./entry_files/HelloWorld.js";
import javaBasicsEntryHTML from "./entry_files/java_branch/JavaBasics.js";
import javaScriptBasicsEntryHTML from "./entry_files/js_branch/JavaScriptBasics.js";
import learningAPIsEntryHTML from "./entry_files/java_branch/LearningAPIs.js";
import learningComputersEntryHTML from "./entry_files/unh_branch/LearningComputers.js";
import lunacatsEntryHTML from "./entry_files/unh_branch/LunaCats.js";
import myFirstProjectEntryHTML from "./entry_files/java_branch/MyFirstProject.js";
import newLanguagesEntryHTML from "./entry_files/unh_branch/NewLanguages.js";
import reactEntryHTML from "./entry_files/js_branch/React.js";
import roadblockEntryHTML from "./entry_files/js_branch/Roadblock.js";
import findingConfidenceEntryHTML from "./entry_files/joined_branch/FindingMyConfidence.js";
import internshipEntryHTML from "./entry_files/joined_branch/Internship.js";
import futureEntryHTML from "./entry_files/joined_branch/Future.js";

let pagesRead = 0;
let totalPages = 14;

let titlesPagesRead = [];

const pageCounterDiv = document.getElementById("page-counter");
const entryPopupWindowDiv = document.getElementById("entry-popup-window");
const entryContentDiv = document.getElementById("entry-content");
pageCounterDiv.innerHTML = `<p>${pagesRead}/${totalPages} <i class="fa fa-lock" style="font-size:18px"></i></p>`;

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
        pageCounterDiv.innerHTML = `<p>How do computers work?</p>`;
        pageCounterDiv.className = 'counter-complete';
        pageCounterDiv.addEventListener("click", () => {
            openHiddenEntry();
        });
        return;
    }
    pagesRead++;
    pageCounterDiv.innerHTML = `<p>${pagesRead}/${totalPages} <i class="fa fa-lock" style="font-size:18px"></i></p>`;
}

function openHiddenEntry(){
    pageCounterDiv.className = 'counter-read';

    entryPopupWindowDiv.classList.add("visible");
    entryContentDiv.innerHTML = getEntryHTML("how_computers_work");

    history.pushState({}, '', '');
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
        case "new_languages": return newLanguagesEntryHTML();
        case "learning_computers": return learningComputersEntryHTML();
        case "lunacats": return lunacatsEntryHTML();
        case "javascript_basics": return javaScriptBasicsEntryHTML();
        case "react": return reactEntryHTML();
        case "roadblock": return roadblockEntryHTML();
        case "finding_my_confidence": return findingConfidenceEntryHTML();
        case "my_first_internship": return internshipEntryHTML();
        case "my_future": return futureEntryHTML();
        default:  return `<h1>Entry With Name (${entryName}) Not Found! </h1>`;
    }
}
