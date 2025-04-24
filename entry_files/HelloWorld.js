const BEFORE_PYTHON_SNIPPET = `
Choosing a programming language is like choosing a musical instrument. 
Some are sleek and intuitive, others come with a steeper learning curve. But each one tunes your thinking in a slightly different way. 
When people start coding, Python is often the first recommendation. It's clean, minimal, and its Hello, World! is just one line:
`;

const BEFORE_JAVA_SNIPPET = `
That simplicity is charming—but it can also be deceptive.
The very things that make Python elegant can leave a beginner wondering how things actually work. 
There’s no need to define a main method, no curly braces to mark code blocks, no mention of classes or types. 
You just write your intention, and it runs. But skipping all the formalities mean missing out on structure. 
When you later meet languages like Java, with its public static void main, it feels like you’re suddenly being 
asked to play the same song on a much more complex instrument:
`;

const ENDING_STRING = `
For some, that verbosity is frustrating. They may ask why they need to rewrite all of these things. 
It is quite a valid question, but my purpose in using this example is my realization, quite early in my coding journey, 
that the verbosity that certain languages provide, make understanding the intricacies of code easier to understand. 
It’s a peek behind the curtain—a nudge to think more deeply about the machine you’re speaking to. 

Perhaps most importantly, this verbosity lends itself to explaining other people’s code. 
If you wonder what I mean, I implore you to look at a complex codebase written in Python and try to quickly 
understand what is happening when you don’t know what type of variable each thing is, 
and you must rely solely on good naming practices (relying on other peoples naming practices is quite the gamble!). 
That is why I look at Java code, and do not feel that the verbosity and boiler-plate nature is a 
reason to avoid the language.

Learning to code isn’t just about getting things to work—it’s about understanding why they work. 
And sometimes, the verbosity of a language helps you slow down enough to see that.

So maybe Hello, World! is more than just a tradition. 
Maybe it’s our first handshake with logic, a simple sentence that starts a lifelong dialogue.
While I cannot recall whether I actually completed a 'Hello, World!' program when I started, I can
recall my opinion quickly shifting toward Java, largely as a result of being able to define and understand
<i>every</i> single that happens. When I write code, I can trust that my future self will be able to read and
understand what I am writing, and not need to trust my imperfect memory.
`;

const JAVA_PRINT = `
public class Main{
    public static void main(String[] args){
        System.out.println("Hello, World!");
    }
}
`;

export default function helloWorldEntryHTML(){
    return `
        <h1>Hello, World!</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${BEFORE_PYTHON_SNIPPET.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>

        <div class="code-container">
            <code>print('Hello, World!')</code>
        </div>

        <div class="writing-container">
            <p>${BEFORE_JAVA_SNIPPET.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>

        <div class="code-container">
            <pre><code>${JAVA_PRINT.trim()}</code></pre>
        </div>

        <div class="writing-container">
            <p>${ENDING_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}