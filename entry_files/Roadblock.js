const ENTRY_STRING = `
As I discussed in previous section <b>React</b>, my journey with learning frontend development
has come to what I could call a standstill. I have carried what I learned along with me, but chose
to focus on different programming paradigms, only occasionally visiting these topics.

Funny enough, creating this roadmap is the most JavaScript I have written in about a year, and I have quite
enjoyed the process. Perhaps this is because I got a fresh start, or perhaps it is simply a result of wanting to
see my idea through. Whatever the case, I have enjoyed it more than before. Perhaps I will have a change
of heart in the near future, and choose to pursue learning frontend development further. Who knows what may come my
way, for that I will have to wait and see...
`;

export default function roadblockEntryHTML(){
    return `
        <h1>Reaching A Roadblock</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}