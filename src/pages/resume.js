import Hero from '../components/hero.js'
import Footer from'../components/footer.js'
import React, {useState} from 'react';



export const Resume = () => {

    return(        
        <div className="fonty autoJustify">
            <Hero></Hero>

            <h1 className="italic App">Contact Information: 720-930-0126    |    jaharris0307@gmail.com | <a className="underline" href="./skills">relevant skills</a></h1>



            

            
            <p className="pt-8 indent">
                Liberty University student studying Computer Science, with a cognate in Cybersecurity. Minoring in Mathematics. I am very involved with that department, as I am currently the Treasurer and Project Leader for the Software Development Club and a tutor for our Computer Architecture course. I am a very motivated student and learner, always jumping on every opportunity to learn more about this field and industry. I have worked in languages such as C, x86, Lua, Python, Rust, R, and web development frameworks like CSS and React.js. I have a strong passion for network architecture, specifically in DMX protocol, sACN/ArtNet transmission, and lighting systems.
            </p>


            
            <p className="pt-8 indent">Passionate lighting designer and production worker with over two years of industry
                experience. Experienced lighting designer, technician, and programmer. Proud owner of an <a className="underline"href="https://www.malighting.com/product-archive/product/dot2-xl-f-120212/" target="_blank">MA
                Lighting dot2 XL-F</a> console. Very hardworking and motivated worker who is eager to
                contribute skills to making shows as spectacular as they can be. Former intern at <a className="underline" href="https://www.actentertainment.com" target="_blank">ACT Entertainment</a> in the summer of 2024. Lives to further the idea that the work done
                behind the scenes is just as important as those who perform onstage.
            </p>

            <p className="pt-8 italic left text-2xl">
                education:
            </p>
            <p className="pt-2 left text-l">
                <p className="indent"> <a className="bold pt-8 underline">Bachelor of Science</a>: Computer Science, emphasis in Cybersecurity</p>
            </p>

            <p className="indent2">- Mathematics Minor</p>
            <p className="indent2">- Campus Production Lighting Technician</p>
            <p className="indent2">- Liberty Rocketry</p>
            <p className="indent2">- LASI Research Team</p>
            <p className="indent2">- Treasurer of Software Engineering Team</p>
            <p className="indent2">- Student Tutor</p>

            <p className="indent pt-4 left text-l">
                Relevant Coursework: 
            </p> 
            <p className="indent2">- Advanced Calculus / Differential Equations</p>
            <p className="indent2">- Operating Systems Design</p>
            <p className="indent2">- Network Architecture and Protocol Theory</p>
            <p className="indent2">- Linux Operating Systems</p>

            <p className="indent pt-4 left text-l">
                Anticipated Coursework (Fall 2025):
            </p>
            <p className="indent2">- Compiler and Programming Theory</p>
            <p className="indent2">- Physics II</p>
            <p className="indent2">- Cybersecurity Capstone I</p>
            <p className="indent2">- Distributed Systems and Application</p>

            <p className="pt-8 italic left text-2xl">
                recent work history:
            </p>

            {/* LASI */}
            <p className="indent pt-8"><a className="bold underline">Student Researcher</a> - Liberty University LASI, <a className="italic">8/2024 to Current</a>
             </p>

            <p className="indent2 pt-2">● Collaborated with ten other students studying Computer Science, </p>
                <p className="indent2"> and other related STEM fields</p>
                
            <p className="indent2 pt-1">● Focused on Artificial Intelligence, Neural Networks, and</p>
                <p className="indent2"> large-scale machine learning</p>
                
            <p className="indent2 pt-1">● Presented findings to University President, Provost, </p>
                <p className="indent2"> and clients</p>

            {/* ROCKETRY */}
            <p className="indent pt-8"><a className="bold underline">Ground Station Lead</a> - Liberty Rocketry, <a className="italic">8/2024 to Current</a>
             </p>

            <p className="indent2 pt-2">● Managed and assisted in the development of a ground package </p>
                <p className="indent2"> computer for Liberty Rocketry's third competiton year</p>
                
            <p className="indent2 pt-1">● Worked with Liberty Rocketry's software team, avionics team,</p>
                <p className="indent2"> and electronics team on live data telemetry</p>
                
            <p className="indent2 pt-1">● Studied computer hardware, operating systems, and GUI applications </p>
                <p className="indent2"> in both C++ and Python</p>


            {/* LU WORK */}
             <p className="indent pt-8"><a className="bold underline">Lighting Technician</a> - Liberty University Tower Theatre, <a className="italic">8/2023 to Current</a>
             </p>

            <p className="indent2 pt-2">● Installed lighting fixtures, smoke machines, </p>
                <p className="indent2"> hazers, and projectors for various productions</p>
                
            <p className="indent2 pt-1">● Performed adjustments on lighting fixtures such as lens replacement</p>
                
            <p className="indent2 pt-1">● Set up wiring for all fixtures utilizing DMX connection, patching fixtures </p>
                <p className="indent2">into universes, and establishing strong communication between light fixtures</p>
                <p className="indent2"> and a console.</p>
                
            <p className="indent2 pt-1">● Utilized industry-standard rigging techniques to hang scenery, truss, and</p>
                <p className="indent2"> flown electric lines safely</p>
            
            <p className="indent2 pt-1">● Given chances to think creatively and apply effective solutions to problems</p>
            
            <p className="indent2 pt-1">● Provided skills in programming and running shows on MA Lighting and </p>
                <p className="indent2">ETC Connect consoles</p>
            
            {/* ACT */}
            <p className="indent pt-4"><a className="bold underline">Technical Services Intern</a> - Act Entertainment, <a className="italic">7/2024 to 8/2024</a>
            </p>

            <p className="indent2 pt-4">● Spent time servicing and repairing MA Lighting products and technology</p>
            <p className="indent2 pt-1">● Successfully repaired 25+ grandMA2 and grandMA3 products</p>
            <p className="indent2 pt-1">● Disassembled, analyzed, and performed repairs on Ayrton lighting products</p>
            <p className="indent2 pt-1">● Enrolled in a grandMA3 programming course</p>
            <p className="indent2 pt-1">● Replaced controller boards, keys, motorized faders, knobs, and motherboards</p>
            <p className="indent2 pt-1">● Performed hardware and software stress tests</p>

            {/* CHCC INTERNSHIP */}
            <p className="indent pt-8"><a className="bold underline">Production Intern</a> - Cherry Hills Community Church, <a className="italic">5/2023 to 8/2023</a></p>

            <p className="indent2 pt-2">● Used audio, video, and lighting consoles </p>
            <p className="indent2 ">and equipment for various church-related events</p>
            <p className="indent2 pt-1">● Served as interim LD for one week, worked as L2 on Sunday mornings</p>
            <p className="indent2 pt-1">● Programmed light shows for Sunday services</p>
            <p className="indent2 pt-1">● Operating various cameras such as jib & arena cameras</p>
            <p className="indent2 pt-1">● Provided AVL support to corporate events such as graduation ceremonies and</p>
            <p className="indent2"> the EPC's 43rd General Assembly.</p>
            <p className="indent2 pt-1">● Troubleshooting for moving stage lights such as Vari-Lite profiles and</p>
            <p className="indent2"> Martin Mac 301s</p>
            <p className="indent2 pt-1">● Used Resolume and other video software to project content onto uniquely</p>
            <p className="indent2"> mapped surfaces</p>
            <p className="indent2 pt-1">● Worked on LED screens and performed basic troubleshooting such as panel </p>
            <p className="indent2">replacement and realignment</p>

            {/* CHCC Volunteering
            <p className="indent pt-8">
                <a className="bold underline">Lighting Volunteer</a> - Cherry Hills Community Church, <a className="italic">4/2022 to Current</a>
            </p>
                <p className="indent2 pt-2">● Served as LD and L2 for Sunday services</p>
                <p className="indent2 pt-1">● Being available for whatever jobs must be completed before a certain date</p>
                <p className="indent2 pt-1">● Assisting with light design, programming, and organization</p>
                <p className="indent2 pt-1">● Setting up spotlights, testing snow & haze machines, setting lights </p>
                <p className="indent2">on or above stage.
            </p> */}

            
            <p className="pt-8 italic left text-2xl">
                personal projects:
            </p>

            <p className="indent pt-2">
                <h2><a className="bold underline" href="https://ser-website.vercel.app/" target="_blank">Software Engineering Team Website</a> - Responsible for constructing the 'Projects' page for this website. Built with JavaScript, Tailwind CSS, framework from Next.js</h2>
            </p>

            <p className="indent pt-4">
                <h2><a className="bold">Atari-Themed RPG</a> - 8-bit Atari-themed game created using 6502 Assembly language. Served as an exposure to assembly language, byte-level operations, memory allocation, and computer processing.</h2>
            </p>

            <p className="indent pt-4">
                <h2><a className="bold">RREF Calculator</a> - Calculator to find the Echelon form, Reduced Echelon form, and Row-Reduced Echelon Form of a given <a className="italic">n x n</a> matrix. Built in C++ using object-oriented programming, dynamic memomry allocation, and basic linear algebra concepts</h2>
            </p>

            <p className="indent2 pt-4">
                <h2><a className="bold">Wordle</a> - A replica of New York Times' '<a className="underline" href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>' game, made in C++ </h2>
            </p>

            <h1 className="indent pt-4">
                <h2><a className="bold">This website!</a> - This website is a personal project aimed to not only communicate what I can bring to prospective roles, but also to sharpen my JavaScript, HTML, and CSS programming skils</h2>
            </h1>

            <Footer></Footer>
        </div>
    )
}