const ENTRY_STRING = `

`;

export default function futureEntryHTML(){
    return `
        <h1>My Future & My Career</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}