const ENTRY_STRING = `
Who knew getting lost could be so helpful? 
In my journey, one thing I have learned about myself is that not only am I a hands-on learner, 
but more interesting is that I learn best when I let myself get lost. What this means is that 
I enjoy getting into the weeds on a subject. I take hours, sometimes even days, 
feeling completely and utterly confused, yet stacking on knowledge, 
until finally I emerge at the end of the tunnel. I bring this up here, after discussing APIs, 
because it was while I learned API development that I learned this about myself.

Spring Boot is the most popular framework for writing APIs in Java. 
Naturally, this was the tool I began with when I wanted to learn APIs, 
as most of my knowledge to this point was in Java. I began by watching a beginner’s playlist on YouTube, 
and it is here where I began to feel lost. Spring Boot uses a lot of ‘magic’ as one could call it, 
where much of the underlying ideas are abstracted away behind simple interfaces. 
This makes it incredibly powerful, as you can spin up complex applications with small amounts of code, 
and much of the configuration steps are done for you. One downside to this approach, however, 
is that it requires a certain level of ‘trust, but don’t ask questions.’ I did not like this. 
I didn’t want to just write a piece of code and know it worked, I wanted to know <i>why</i> it worked. 
I wanted to know that I understood everything I was using, so that in the future 
I could rewrite it again in a different context and still know what to do.

Therefore, I began to get lost. I would begin writing, and Google every single thing I did not understand. 
Much of this was irrelevant to actually getting the code to run, yet once it finally did click, 
I had learned far more about the why than I would have otherwise. This extra research, 
trying to find my way out of the tunnel, is also why I began to enjoy Spring Boot so much. 
Much like everyone has a fluent language, Java is my fluent programming language. 
Even now, when I have tried to learn new programming languages, I use Java to translate my ideas, 
much like I use English to translate to a foreign language.

I am very grateful for this experience, as without it I am not sure I would have discovered this style of learning. 
While I knew I was a hands-on learner, it was this approach that I have had the most success with, 
and it is one that I use again and again. Although it may not work for everyone, it works for me, 
and it got me to the point I am today on my journey, and for that 
I express how important this stage was in my journey.
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