const ENTRY_STRING = `
Computers are magic. Or that is what I told myself when I first started studying Computer Science. To a
certain extent, I still think this from time to time, however it is the knowledge I learned primarily
in classes that used the C language that have illustrated to me how they actually work, on a deeper level.
While I do not want to get too far into this topic, as to not spoil my upcoming section on how computers work,
from the perspective of someone who slowly learned this over the course of the year, I do want to express that the
classes taught at UNH, at least the ones in C, have provided vital to my understanding of the inner-workings
of computers as machines.

It took at least two years for me to feel confident in understanding how computers actually work, and how they
are capable of so much, but it was specifically the help of CS520, a systems programming class, and CS620, a class
on Operating Systems. These two classes provided the foundation for explaining how a computer works, all the way
down to the electrical circuits. I will leave it here for now, however I will dive deeper into this in an upcoming
section, where I seek to answer this question to you as a reader.
`;

export default function learningComputersEntryHTML(){
    return `
        <h1>Learning Computers With C</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}