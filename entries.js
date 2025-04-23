import helloWorldEntry from "./entry_files/HelloWorld.js";

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
    let entry = entries.find(temp => temp.elementName == entryName);

    if(entry == null){
        return `<h1>Entry With Name (${entryName}) Not Found! </h1>`;
    }

    return `
        <h1>${entry.name}</h1>
        <hr/>
        ${entry.sections.map(section => 
        `
            <h3>${section.index}. ${section.name}</h3>
            <p>${section.text.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        `)}
    `;
}

let entries = [helloWorldEntry()];

export { EntryText, EntrySection, getEntryHTML};
