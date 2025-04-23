import { EntryText, EntrySection } from '../Entry.js';

const HELLO_WORLD_TEXT = `
It is tradition for every developer to begin their coding journey by writing the same simple program.
This program, is to simply print the output "Hello, World!" to the terminal window. While simple, it gives
you immediate feedback, and serves to show that YOU are the one who will control what happens when you write your code.
`;

export default function helloWorldEntryHTML(){
    return `
        <h1>Hello, World!</h3>
        <hr class="entry-line-break"/>
        <p>${HELLO_WORLD_TEXT.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
    `;
}