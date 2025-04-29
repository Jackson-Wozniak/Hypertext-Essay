const ENTRY_STRING = `

`;

export default function findingConfidenceEntryHTML(){
    return `
        <h1>Finding My Confidence</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}