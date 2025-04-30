const ENTRY_STRING = `
It is said that a developer should learn about one new language each year.
While not a hard-set requirement, the idea is to open your mind to new approaches, and broaden your horizons.
There is infinitely many technologies a developer could learn, and so slowly branching out can be helpful
in determining what exactly you want to pursue. The funny thing about majoring in Computer Science, is that
often you are required to learn at least one new language each year, to use in your classes.

UNH's Computer Science department has put their focus into two language: Java and C. The C language is a lower-level
language that provides more insight into how computers work, though this discussion will be expanded upon in the
next section. However, along the way, my classes have also introduced PHP, Scala, and Kotlin. While some are used
more than others, the idea here is that I am broadening my horizons, just simply by taking the classes needed for my
degree. For this, my journey has led me along paths that I otherwise would not have explored to this point, and
the introduction to these new languages has allowed me to learn new things, new approaches, and gain a better insight
into what the world of technology offers. Even without delving deep into a language, just merely spending time Learning
one is enough to teach a developer things they don't know, and that is where the recommendation to learn
a new language a year comes from. For me, this has also helped me in gaining confidence, knowing that I am capable
of reaching out and exploring a new language, and utilize it when needed. For this, UNH has taught me a lot.
`;

export default function newLanguagesEntryHTML(){
    return `
        <h1>Learning Languages for UNH</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}