import Hero from '../components/hero.js'
import Footer from'../components/footer.js'
import React from 'react';

export const Resume = () => {
    return(
        <div className="fonty centering">
            <Hero></Hero>
            <div class="flex justify-center py-4">
                <div style={{width: 975}} class="border-t border-gray-300"></div>
            </div>

            <h1 className="italic App">Contact Information: 720-930-0126    |    jaharris0307@gmail.com | <a className="underline" href="./skills">relevant skills</a></h1>

            <p className="pt-8 App">Passionate lighting designer and production worker with over two years of industry
                experience. Experienced lighting designer, technician, and programmer. Proud owner of an <a className="underline"href="https://www.malighting.com/product-archive/product/dot2-xl-f-120212/" target="_blank">MA
                Lighting dot2 XL-F</a> console. Very hardworking and motivated worker who is eager to
                contribute skills to making shows as spectacular as they can be. Planning on interning in the summer of 2024 with <a className="underline" href="https://www.actentertainment.com" target="_blank">ACT Entertainment</a> and <a className="underline" href="https://gntv.info" target="_blank">GNTV Media</a>. Lives to further the idea that the work done
                behind the scenes is just as important as those who perform onstage.
            </p>

            <p className="pt-8 px-96 italic left text-2xl">
                education:
            </p>

            <h1 className="px-96 indent">
                <a className="bold pt-8 underline">Bachelor of Science</a>: Computer Science, emphasis in <a className="bold">Software Engineering</a>
            </h1>
            <h2 className="px-96 indent2">- Mathematics Minor</h2>
            <h2 className="px-96 indent2">- Software Engineering Team</h2>
            <h2 className="px-96 indent2">- Lighting Technician</h2>
            <h2 className="px-96 indent2">- Competitive Programming Team</h2>

            <h1 className="px-96 pt-4 indent">
                Relevant Coursework: 
            </h1>
            <h2 className="px-96 indent2">- Advanced Calculus</h2>
            <h2 className="px-96 indent2">- Data Structures and Algorithms</h2>
            <h2 className="px-96 indent2">- Network Architecture and Protocol Theory</h2>

            <p className="pt-8 px-96 italic left text-2xl">
                recent work history:
            </p>
            <h1 className="px-96">
                <h2 className="indent"><a className="bold underline">Lighting Technician</a> - Liberty University Tower Theatre, <a className="italic">8/2023 to Current</a></h2>
                <h2 className="indent2">● Installed lighting fixtures, smoke machines, hazers, and projectors for</h2>
                <h2 className="indent2"> various productions</h2>
                <h2 className="indent2">● Performed adjustments on lighting fixtures such as lens replacement</h2>
                <h2 className="indent2">● Set up wiring for all fixtures utilizing DMX connection, patching fixtures </h2>
                <h2 className="indent2">into universes, and establishing strong communication between light fixtures</h2>
                <h2 className="indent2"> and a console.</h2>
                <h2 className="indent2">● Utilized industry-standard rigging techniques to hang scenery, truss, and</h2>
                <h2 className="indent2"> flown electric lines safely</h2>
                <h2 className="indent2">● Given chances to think creatively and apply effective solutions to problems</h2>
                <h2 className="indent2">● Provided skills in programming and running shows on MA Lighting and </h2>
                <h2 className="indent2">ETC Connect consoles</h2>
            </h1>

            <h1 className="px-96 pt-4">
                <h2 className="indent"><a className="bold underline">Production Intern</a> - Cherry Hills Community Church, <a className="italic">5/2023 to 8/2023</a></h2>
                <h2 className="indent2">● Used audio, video, and lighting consoles & equipment for various</h2>
                <h2 className="indent2"> church-related events</h2>
                <h2 className="indent2">● Served as interim LD for one week, worked as L2 on Sunday mornings</h2>
                <h2 className="indent2">● Programmed light shows for Sunday services</h2>
                <h2 className="indent2">● Operating various cameras such as jib & arena cameras</h2>
                <h2 className="indent2">● Provided AVL support to corporate events such as graduation ceremonies and</h2>
                <h2 className="indent2"> the EPC's 43rd General Assembly.</h2>
                <h2 className="indent2">● Troubleshooting for moving stage lights such as Vari-Lite profiles and</h2>
                <h2 className="indent2"> Martin Mac 301s</h2>
                <h2 className="indent2">● Used Resolume and other video software to project content onto uniquely</h2>
                <h2 className="indent2"> mapped surfaces</h2>
                <h2 className="indent2">● Worked on LED screens and performed basic troubleshooting such as panel </h2>
                <h2 className="indent2">replacement and realignment</h2>
            </h1>

            <h1 className="px-96 pt-4">
                <h2 className="indent"><a className="bold underline">Lighting Volunteer</a> - Cherry Hills Community Church, <a className="italic">4/2022 to Current</a></h2>
                <h2 className="indent2">● Served as LD and L2 for Sunday services</h2>
                <h2 className="indent2">● Being available for whatever jobs must be completed before a certain date</h2>
                <h2 className="indent2">● Assisting with light design, programming, and organization</h2>
                <h2 className="indent2">● Setting up spotlights, testing snow & haze machines, setting lights </h2>
                <h2 className="indent2">on or above stage.</h2>
            </h1>

            <p className="pt-8 px-96 italic left text-2xl">
                personal projects:
            </p>

            <h1 className="px-96 pt-2">
                <h2 className="indent"><a className="bold underline" href="https://ser-website.vercel.app/" target="_blank">Software Engineering Team Website</a> - Responsible for constructing the 'Projects' page for this website. Built with JavaScript, Tailwind CSS, framework from Next.js</h2>
            </h1>

            <h1 className="px-96 pt-4">
                <h2 className="indent"><a className="bold">RREF Calculator</a> - Calculator to find the Echelon form, Reduced Echelon form, and Row-Reduced Echelon Form of a given <a className="italic">n x n</a> matrix. Built in C++ using object-oriented programming, dynamic memomry allocation, and basic linear algebra concepts</h2>
            </h1>

            <h1 className="px-96 pt-4">
                <h2 className="indent"><a className="bold">Wordle</a> - A replica of New York Times' '<a className="underline" href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>' game, made in C++</h2>
            </h1>

            <h1 className="px-96 pt-4">
                <h2 className="indent"><a className="bold">This website!</a> - This website is a personal project aimed to not only communicate what I can bring to prospective roles, but also to sharpen my JavaScript, HTML, and CSS programming skils</h2>
            </h1>

            <Footer></Footer>
        </div>
    )
}