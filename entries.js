let pagesRead = 0;
let totalPages = 10;

let titlesPagesRead = [];

const pageCounterDiv = document.getElementById("page-counter");
pageCounterDiv.textContent = '${pagesRead} / ${totalPages} read';

function incrementCounter(){
    if(pagesRead + 1 >= totalPages){
        pageCounterDiv.textContent = 'How do computers work?';
        pageCounterDiv.className = 'counter-complete';
        return;
    }
    pagesRead++;
    pageCounterDiv.textContent = '${pagesRead} / ${totalPages} read';
}

function setPageRead(pageName){
    if(!titlesPagesRead.includes(pageName)){
        incrementCounter;
        titlesPagesRead.push(pageName);
        let tempEntry = document.getElementById("hello-world-window");
        tempEntry.classList.remove('entry-unread');
        tempEntry.classList.add('entry-read');
    }
}