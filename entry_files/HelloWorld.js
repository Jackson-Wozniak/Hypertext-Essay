import { EntryText, EntrySection } from '../Entries.js';

const example = `
This is a paragraph.

It keeps line breaks and    spacing.
You can even use tabs and quotes: "Hello!"
`;

export default function helloWorldEntry(){
    const HELLO_WORLD_SECTION_1 = new EntrySection(1, "Intro", example);
    const HELLOW_WORLD_ENTRY = new EntryText("hello_world", "Hello, World!", [HELLO_WORLD_SECTION_1]);
    return HELLOW_WORLD_ENTRY;
}