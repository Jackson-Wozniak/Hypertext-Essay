const ENTRY_STRING = `
This summer, I am scheduled to start my first internship! This is a big step, as it is the first
computer-related job I will have taken, and therefore I hope to apply all the knowledge I have learned, all
the things I spoke of in this roadmap, and contribute over the summer. Interns are typically
thought to be entry-level, and therefore my expectations are lower than they would be for a full time role.
Although I expect growing pains, adjustment periods, and perhaps a time of struggle, I hope that at the very least,
I am capable of becoming a contributing member of the team.

I was hired at Concord Group Insurance, with my title being 'Software Engineer Intern.' This is a 12-week
opportunity, ending a week before the Fall semester begins. Who knows what the future may hold, but the entirety
of my work outlined throughout this roadmap has led up to this point...
`;

export default function internshipEntryHTML(){
    return `
        <h1>My First Internship</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
        <img src="./internship.svg" alt="" style="width: 50vw; background-color: white; padding: 5px"/>
    `;
}