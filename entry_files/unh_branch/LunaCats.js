const ENTRY_STRING = `

`;

export default function lunacatsEntryHTML(){
    return `
        <h1>UNH LunaCats</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}