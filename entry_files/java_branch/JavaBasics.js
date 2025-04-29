const BEFORE_CODE_SNIPPET = `
My first semester in college began in 2021, a year after the covid pandemic began. 
I graduated high school in 2020, but took a year off to explore what I <i>really</i> wanted to do. 
I had taken computer classes in high school, and knew that I wanted to work with computers, 
but the difficult part was finding exactly what I wanted to do with them. Hacking sounded interesting to me. 
Did I know that much about cybersecurity at the time, or the fact that the work is
actually quite dull in a day-to-day setting? Of course not. I just thought it would be cool to learn to hack.

Yet, in that year off, I did take a little time to explore programming further, 
and it is here where I applied to Manchester Community College, for a degree in Computer Science. 
My first semester began with the basics. Little in the way of hands-on programming, but plenty of theory. 
This was interesting enough, however my story here is more about my <i>second</i> semester here. 
The second semester is when I took ‘Introduction to Java Programming.’ 
This was the first course that really delved into programming, letting us write code and see what it does. 
When you first learn programming, even the very basic ideas can seem overwhelming. 
Let us look at for-loops to illustrate that many of programming’s most integral parts are actually quite simple. 
I will show a very basic example of finding the factorial of a number.

To ensure we are on the same page, a number’s factorial value (denoted with !), is the number, 
times the number minus one, times the number minus two, and so on until we reach one. So five factorial is:

5! = 5 * 4 * 3 * 2 * 1 = 120

Now if we wanted to code this, a for-loop is the tool for us:
`;

const AFTER_CODE_SNIPPET = `
This looks intimidating, especially compared to the simple task we are trying to achieve. 
However, each part works together quite intuitively, once you know what it all means. 
Inside the for loop we have 3 arguments. The first, int i = 4, simply sets the initial value of i to be 4. 
Next, i > 0 means that we continue this loop until i is no longer greater than 0. 
Finally, i-- means that we take 1 off every time we complete a loop. 
The rest of the code is simply multiplying factorial by i, and printing the output. 
For loops are integral to coding and end up being quite simple. Yet, for a beginner, 
this notation can seem far more complex. It is here where we discover one of the first lessons 
I learned when I began coding: the complexity of code comes from combining many simple instructions.

What this means is that each topic I learned in this introductory course was simple on its own. 
Variables, loops, statements, and many other building blocks of a programming language work 
exactly as they seem and require little more thought than that. However, the difficulty, 
and in fact the reason why a class like this is necessary, is learning to find <i>when</i> to use them. 
Learning how to combine them, and integrating other topics, is the true goal. 
It is why problem solving is the most important part of learning to code. 
This class is where I learned this lesson, and it is where I began my journey in learning to solve problems. 
I could keep talking about this, and more specifically I am inclined to continue this discussion by 
talking about how learning to problem solve and understand the problems faced in programming makes a 
programmer realize that the worry of which language to learn first is irrelevant, 
but this would cause me to dive too far into the weeds, and I would likely go off on a long 
tangent that has little to do with my journey in code, so I will instead leave this here, 
and let you move on to the next section. 
`;

const CODE_SNIPPET = `
int factorial = 5;
for(int i = 4; i > 0; i--){
    factorial *= i;
}
System.out.println(factorial); //prints 120

`;

export default function javaBasicsEntryHTML(){
    return `
        <h1>Java Basics</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${BEFORE_CODE_SNIPPET.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>

        <div class="code-container">
            <pre><code>${CODE_SNIPPET.trim()}</code></pre>
        </div>

        <div class="writing-container">
            <p>${AFTER_CODE_SNIPPET.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}