import helloWorldEntryHTML from "./entry_files/HelloWorld.js";

class EntrySection{
    index;
    name
    text;
    constructor(index, name, text){
        this.index = index;
        this.name = name;
        this.text = text;
    }
}

class EntryText{
    elementName;
    name;
    sections;
    constructor(elementName, name, sections){
        this.elementName = elementName;
        this.name = name;
        this.sections = sections;
    }
}

function getEntryHTML(entryName){
    switch(entryName){
        case "hello_world": return helloWorldEntryHTML();
        default:  return `<h1>Entry With Name (${entryName}) Not Found! </h1>`;
    }
}

export { EntryText, EntrySection, getEntryHTML};