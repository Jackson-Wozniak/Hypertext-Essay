const ENTRY_STRING = `
It becomes apparent quite quickly in programming that the application of knowledge is 
far more important than merely knowing something. A programmer may know every single keyword, 
or every library of a language, but until they prove that they can apply this knowledge to 
whatever problem they seek to solve, they are unproven. Knowledge, while important, 
is second in priority to skill. To illustrate this point, we look at the dreaded <i>Tutorial Hell</i>. 
This is a place no beginner wants to find themselves, yet many wander in without realizing, 
finding that the gates have shut behind them and they’re all on their own.

<i>Tutorial Hell</i> is a popular way to describe the stage of learning where you may know about a 
language and understand the basics, yet cannot apply the knowledge to build projects. 
We see this often with self-taught programmers, who spend countless hours practicing different topics, 
writing small, isolated pieces of code that illustrate what a language can do. But ask them to build a project, 
and they seemingly forget everything they’ve learned. The solution to tutorial hell, 
is often to ‘get lost’ so to speak, much like I described before. 
Just start something, however small, and google your way until you find out how to do it.

Once you successfully pass tutorial hell, you likely have made several small projects, such as calculators, 
random number generators and the like. The next stage is to build something useful, something big. 
While many of these larger side projects are left unfinished, it is often the planning and beginning 
stages that are most useful to learning. For me, this first real endeavor was a Stock Market simulation. 
I built this in Spring Boot, with a REST API being the only interface available.

I won’t go too far in depth about this project, as I am not here to tell you exactly what it can do. 
As you can probably guess, this project involved plenty of simulated stocks, each based on a real-life company. 
The stock prices change over time, based on market conditions and some extra parameters I added for detail. 
However, the real lesson I have from this is what I learned about building a unique project. 
I had no real baseline of exactly what I wanted, no MVP (minimum viable project). 
I just started writing code, adding features as I went along.

It was this project that taught me the most about programming, 
and it was also here where I really fell in love with designing applications. 
I began with the bare bones, the basic price formulas, implementing a way to pass time, 
and other things that were necessary to simulate a stock market. But once I was done this, and I had my MVP, 
I realized how much <i>more</i> I could add to make this project special. I added news events, 
macroeconomic conditions, company archetypes to determine the volatility of prices, 
and other details that made this project personal. It went from a simple math problem to an application. 
Although this served no purpose in the real world, and I never intended to advertise this as a product 
someone could use, its real purpose was teaching me that I could build whatever I wanted. 
All I needed was ideas, and with enough effort I could solve the problem.

Nowadays, ideas will occasionally pop into my head about projects I could make. 
Although I rarely go through with building them, I have noticed my mentally shifted over time from, 
“is it possible for me make this?” to, “would this be fun to make?” Although my doubts creep in from time to time, 
I rarely find myself questioning if I can design an application for an idea, 
rather spending time focused on whether it’s worth it. I think this mindset shift was the most 
important thing in realizing that I can be successful in this field, 
if I continue to learn and find new ways to apply the knowledge I have.
`;

export default function myFirstProjectEntryHTML(){
    return `
        <h1>My First Big Project</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}