const ENTRY_STRING = `
Every STEM major must complete a senior seminar, which is a two-semester long project related to their field. For
me, this project was the UNH LunaCats, a club made to compete in NASA's annual Lunabotics competition. The goal
is to build a Lunar Rover, competing with 40 to 50 colleges across the United States to see who can build the best
robot. This has been a very, very unique opportunity, and one that I have not taken for granted. It is
unlikely that I ever work on something like this again, and so I wanted to learn what I could and
appreciate the experience. Here are a few pictures, both of the Robot and us as a team.
`;

export default function lunacatsEntryHTML(){
    return `
        <h1>UNH LunaCats</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
        <img src="https://github.com/Jackson-Wozniak/My-Journey-In-Code/blob/main/resources/lunacat_team.jpg" alt="" style="width: 50vw;" />
    `;
}