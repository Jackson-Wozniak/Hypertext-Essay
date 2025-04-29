const ENTRY_STRING = `
When we talk about APIs in programming, the term usually means one of two things. 
API stands for Application Programming Interface, and at its core, it's a set of rules and protocols 
that let computer systems talk to each other. However, for this discussion, 
I'm focusing on a more specific kind: REST APIs — Representational State Transfer APIs — which are 
what allow systems to communicate over the internet. When I use the acronym "API" from here on, assume I 
mean REST APIs.


In web development, applications are generally split into two logical parts: the frontend and the backend 
(If you’re familiar with middleware, just pretend it doesn't exist for now). 
The frontend is everything you see: when you type in www.youtube.com, the interface, the search bar, 
the video lists, is the front end. The backend is what you don’t see, and it’s the logic that fetches the data. 
When you click on a YouTube video, your device talks to the backend to retrieve the video file, recommendations, 
and other related data that is stored on the server.

When beginner programmers first dive into web development, they often naturally lean toward one side or the other. 
Some are drawn to the frontend — the visible, tangible parts you can interact with. 
From a beginner’s standpoint, backend development is more abstract and confusing. 
There's nothing visual to guide you, and you never "see" the backend directly. 
But that is exactly what made me want to understand it. I wanted to figure out how the unseen parts worked, 
how servers answered requests, and how data moved behind the scenes. 
It quickly became apparent to me that controlling the flow of data, 
trying to piece it all together in my mind as I go, was far more captivating than web design. 
For this reason, much of my journey from this point focuses on this style of programming. 
While I explored many other paradigms, it was server-side API development that became my focus for side projects, 
and the work I did in my free time. It also happens to be the field I am most interested in pursuing as a career, 
but I do not want to spoil the ending here.
`;

export default function learningAPIsEntryHTML(){
    return `
        <h1>Learning APIs</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}