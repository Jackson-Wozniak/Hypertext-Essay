const ENTRY_STRING = `
What does success look like in this field? In fact, what does success look like at all?
To answer this, I must give my subjective view on what it would mean for me to reach success, and what
goals I have set for myself to achieve. I am in a slightly unfair position when it comes to success, owing
to the fact that there is someone quite notable with the last name 'Wozniak' in the field of software
engineering. Steve Wozniak, co-founder of Apple, casts a shadow over me and my perceived success. This
doesn't actually matter nor does it affect me, but its a joke I like to make to excuse myself when I make mistakes.

First and foremost, I must graduate college. If all goes to plan, my scheduled graduation is December 2025. Until
this point, the primary goal for reaching success is to keep hammering away at all my work, and enjoy life.
College is unique, and it's an experience I won't get again, so part of the journey in graduating is enjoying
life and taking in all the experiences. After all, if you achieve all your goals but don't have fun along the
way, is it really worth it? For me, enjoying life here is getting out of my dorm, going for walks, hikes,
and pursuing hobbies. I have taken a step back from coding in my free time, only doing so when I really
compelled. This is largely to make time for my other hobbies, but also that I am able exercise my
programming mind with classwork, so side projects become secondary to me.

Assuming I graduate, the next step of success would be establishing a career. This is where the future becomes
blurry, because there are too many factors to determine exactly what a successful career would be. For this, I will
establish some basic ground rules, and leave it at that:

1.Find a full time job in Software Engineering

2.Find a job that I enjoy

3.Keep a job that allows me to be financially stable

4.Work my way up to a senior-level role

After these three steps, I can't give much specifics. I could decide to take a job in a field of technology
I had not considered, or perhaps I move across the country and my life is turned upside down with a new job.
Perhaps even I strike it rich working at a startup, becoming financially independent through a successful stock IPO.
My point here is that I don't know what I don't know, but what I do know is that there are certain baselines of
success that I have set as goals, as outlined above. I will leave this here, as I am not here to predict the
future, but rather express what I wan't out of my career.

Let's agree to see out my graduation first, and settle upon specific goals in the future. As for you,
your success has come in the form of finishing this roadmap, so nice job! Assuming you have read
all entries up to this point, another written piece is waiting for you at the home page, to answer
a question that had badgered me ever since I began my journey and one I feel I could offer insight into with
what I have learned over the past five years.
`;

export default function futureEntryHTML(){
    return `
        <h1>My Future</h3>
        <hr class="entry-line-break"/>
        <div class="writing-container">
            <p>${ENTRY_STRING.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}