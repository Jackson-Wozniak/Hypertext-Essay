const ENTRY_STRING = `
Who knew getting lost could be so helpful? 
It did not take long for me to realize that I was a hands-on learner. I like doing things, and if I try
to just listen or watch, I struggle to understand. Yet, what I found when I began coding, was that 
there was a step past this. I learn best when I let myself get lost. I enjoy getting into the weeds on a subject, 
slowly stacking on knowledge. I take hours, sometimes days, feeling completely and utterly confused, until I finally 
emerge at the end of the tunnel. It was along my journey of learning API development that I came to realize this,
and the story is something I reference often when I have tried to learn new things.

Spring Boot is the most popular framework for writing APIs in Java, and so naturally this was
the tool I explored when I first began learning APIs. I began by watching a beginner’s playlist on YouTube, 
and it is here where I began to feel lost. Spring Boot uses a lot of ‘magic,’ as one may call it.
Much of the underlying ideas are abstracted away, hidden behind deceptively simple interfaces.
This makes it incredibly powerful, where much of the configuration steps are done for you, 
and you can spin up complex applications with little code. One downside to this, however,
is that it requires a certain level of ‘trust, but don’t ask questions.’ I did not like this. 
I didn’t want to write a piece of code and hope that it worked. I wanted to know <i>why</i> it worked. 
I wanted to understand everything I was doing, so that in the future
I could rewrite it again and again, quickly being able to apply it to new contexts.

Therefore, I let myself get lost. I found an idea for a project, and began googling every single thing I did not
understand. I can confidently say that much of this research was irrelevant to ensuring my code <i>worked</i>,
yet what it gave me was the answer to why it did work, or perhaps why it did not. It took me days, likely a week,
but yet it finally did click. Once it clicked, not only had I learned far more about Spring Boot than I otherwise
would have, but it became intuitive to me, as if trying to find my way out of the tunnel had lended itself to a deeper
understanding. To illustrate this: everyone has a native language. The language that they know well, and the one
that they use as reference when they are trying to translate things or learn a foreign language. In my journey,
Java became my native programming language, and the reference I use when I want to translate what is happening in
an unrelated language. For example, in trying to learn C#'s Web framework, I spent a lot of time googling 
the Java equavalent to features I stumbled upon. Programming, on a deeper level, has a repeating set of underlying
concepts, and once you find the langauge that clicks with you, applying these concepts in a new language becomes
substantially easier.

I am very grateful for this experience, as without it I am not sure I would have discovered this style of learning. 
While I knew I was a hands-on learner, it was this approach that I have had the most success with, 
and it is one that I use again and again. Would it work for everyone? Perhaps not. Is it the most efficient way?
Doubtful. Yet it is the approach that works for <i>me</i>, and it has helped me along on my journey to where I am
now, and for that I must express how important it was.
`;

export default function gettingLostEntryHTML(){
    return `
        <h1>Getting Lost</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}