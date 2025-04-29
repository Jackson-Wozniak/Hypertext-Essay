const ENTRY_STRING = `
JavaScript, which will use the acronym ‘JS’ for this section, is a language that has become ubiquitous 
in the world today. This is a direct result of its adoption on the web, 
and the ensuing explosion of web-based applications. <b>Everything</b> is a web app nowadays. 
This is understandable, as the internet, more specifically the world wide web, is almost perfectly 
crafted to handle the needs of our modern world.

However, what is <i>not</i> perfectly crafted, is JS as a language. 
Brendan Eich, the founder of JS, wrote it in ten days. This quick, likely rushed development, 
lends itself to many bugs (or ‘features’ as a developer might call them), that make it a wonderfully confusing 
language to work with. Lets take a look at some examples.

For this, we will be using the ‘==’ operator, which checks if the two sides of the operation are equal, 
returning true or false. Before you read the output, try to guess what it <i>should</i> be based on basic 
equivalence logic and intuition.

<div class="code-container">
    <pre><code>0 == [] //[] is an empty array, and this is TRUE</code></pre>
    <pre><code>0 == “0” //the quotes make the right side a string, but this is TRUE</code></pre>
    <pre><code>”0” == [] //magically, this is FALSE</code></pre>
</div>

<div class="code-container">
    <pre><code>2 + “2” //we are combining the string, making the value 22 </code></pre>
    <pre><code>2 – “2” //magically, this value is 0</code></pre>
</div>

See what I mean? I won’t get into explaining why this is the case, nor is this relevant to my journey with JS, 
I just thought it a funny background to the language.

I began JavaScript as a way to display what I build on the web. 
I began by writing small, simple applications and games that I could test in my browser. 
This came after my learning Java, and therefore much of the general skills I had carried over. 
This was a relatively quick step in my journey, as I used this more as a 
launching pad to more in-depth web applications. However, building these bigger projects in vanilla JS 
(no frameworks to help with boilerplate code) is a slog, and it limits the amount of 
time a programmer can spend writing the logic for the application. To improve our frontend web development, 
we need to introduce frameworks to JS. For this, we go next to React.JS, the most popular framework for 
writing web apps, and the topic of my next section.
`;

export default function javaScriptBasicsEntryHTML(){
    return `
        <h1>JavaScript Basics</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}