import { EntryText, EntrySection } from '../Entries.js';

const HELLO_WORLD_TEXT = `
This is a test!

It should even have paragraphs.

    Lets see about tabs?
`;

export default function helloWorldEntryHTML(){
    return `
        <h1>Hello, World!</h3>
        <hr class="entry-line-break"/>
        <p>${HELLO_WORLD_TEXT.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
    `;
}