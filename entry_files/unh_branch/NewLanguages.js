const ENTRY_STRING = `

`;

export default function newLanguagesEntryHTML(){
    return `
        <h1>Learning Languages for UNH</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}