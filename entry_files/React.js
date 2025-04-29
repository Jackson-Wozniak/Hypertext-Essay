const ENTRY_STRING = `
React, while imperfect, allows for a clear and understandable method for designing bigger web applications. 
What I learned very early on, however, is that I do not enjoy designing these web applications. 
What I enjoy most, and what I expand upon further in <b>Learning APIs</b> is the more theoretical side of 
programming. Rather than focus on web design, or handling user input and showing output, is the transfer 
and processing of data. For this reason, my journey with React is quite brief. I tried it, learned some things, 
and decided I would rather focus my learning on things that better capture the topics I am captivated by.

I would say that learning Frontend development still gave me great knowledge, 
and taught me things that will translate into my career, however I can say for certain that I am not 
as interested in what Frontend development has to offer, nor do I want a career that involves in-depth web design. 
Perhaps my views will shift over time, but for the time being this is as far as I went with JavaScript and React, 
and so I have little more to add.
`;

export default function reactEntryHTML(){
    return `
        <h1>Working with React</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}