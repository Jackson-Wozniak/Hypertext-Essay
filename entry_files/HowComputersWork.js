const SECTION_ONE = `
Computers (and block your mics when I say this), are relatively dumb machines. What I mean by that is, 
they do <i>exactly</i> what you tell them to do, and nothing more. Leave them be without instructions, and
they will sit idly for eternity. However, it is what you can do with those instructions that have made them
so integral to our modern world.

Computers use a very simple language on a low level. While we have looked at a few programming languages, which
are ways we as developers interact with computers, the language that a computer actually understands contains
only 2 components: 1s and 0s. These are called bits, and they are the only things that a computer can understand.
Every single thing we write in a programming language is translated to machine code (the 1s and 0s) by
a compiler, which is a type of complex software that is a bit too in-depth for this discussion.

Now that we know what bits are, and therefore what language a computer understands, what do these bits actually do?
Well, each bit is combined to form a byte, or an 8-bit value. These bytes can be mapped to different values, based
on the type of information we are looking to work with. For example, an integer is just a simple number in decimal form.
Characters are another type of information, and represent the characters we use in our language, and what each key
on the keyboard represents. I will not get into how this translation between bytes and their variable counterparts
happen, as it is enough for this discussion to understand that a value is determined by what byte(s)
it has, as well as what type of information it represents (integers, characters, etc.).
`;

const SECTION_TWO = `
A computer processor, known as a CPU, keeps different byte values stored in it's registers, which are
storage systems stored directly on the processor, and these registers control the logic that a computer executes.
We will get further into processors in the next section, as I instead want to take this time to discuss storage, and
how computers actually store information at all. This was perhaps what mystified my most when I thought about
computers, but it's really quite simple.

There are multiple types of storage, each representing different uses. For example, registers located on the CPU
provide the fastest access, and therefore are reserved for only the most important information. We also have
Random Access Memory (RAM), which temporarily stores information that the processor will soon need, and is
also much quicker. We also have disks, and other forms of long term storage. These types of storage are made
to permanently hold bit values, but also provide slow retrieval time. As we go down each layer, toward the registers,
the cost of memory ($) goes up, however the speed also goes up.
`;

const SECTION_THREE = `

`;

export default function howComputersWorkEntryHTML(){
    return `
        <h1>How Computers Work</h1>
        <div class="writing-container">
            <h3>1. Bits. Its all bits.</h3>
            <p>${SECTION_ONE.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
        <div class="writing-container">
            <h3>2. Storage</h3>
            <p>${SECTION_TWO.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
        <div class="writing-container">
            <h3>3. Working With Data</h3>
            <p>${SECTION_THREE.split('\n\n').map(para => `<p>${para}</p>`).join('')}</p>
        </div>
    `;
}