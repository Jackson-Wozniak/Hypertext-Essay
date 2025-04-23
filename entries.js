class EntrySection{
    index;
    text;
    constructor(index, text){
        this.index = index;
        this.text = text;
    }
}

class EntryText{
    name;
    sections;
    constructor(name, sections){
        this.name = name;
        this.sections = sections;
    }
}

export default function getEntryHTML(entryName){
    return `
        <button>test</button>
    `;
}