const ENTRY_STRING = `
I would say most of my confidence has come from what I have learned outside of school, despite
a degree in Computer Science being perhaps the most important factor in finding an entry level
job in the field. Although I have slowed down on the amount of time I code outside of school, owing to the
fact that I am much busier now, I have carried the knowledge with me, and I have built a confidence that no
matter what, I will be able to at least approach a problem and try to tackle it. I have my knowledge gaps,
and I certainly have my weaknesses, but finding my confidence came as a result of reaching goals I set for myself,
as well as seeing myself evolve over time.

The UNH LunaCats also became a great source of confidence for me. While we are unlikely to win the competition,
due in large part to the limitations we had when making the control system for this year, being a part of something
that kid-me would have dreamed of, has had a funny way of making me realize that maybe I do belong.
Maybe I am not the best Computer Scientists ever, and maybe I have a lot to learn and improve on, but I
have proven to myself that I am capable of reaching my goals, and learning things that intially intimidated me.
So perhaps this journey was to find my calling in life, and figure out how I could become happy when I look
in the mirror. But no matter the purpose, I can say for certain that I am happy how it has turned out so far,
especially with what is coming next!
`;

export default function findingConfidenceEntryHTML(){
    return `
        <h1>Finding My Confidence</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}