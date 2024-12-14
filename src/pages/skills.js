import Hero from '../components/hero.js'
import Navbar from '../components/navbar.js'
import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
import React from 'react'

export const Skills = () => {
    return(
      <div>
        <Hero></Hero>

        <h1 className="App fonty pr-72 pt-4 text-2xl">technical skills</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/languages </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'C++' 'C' 'Lua' 'Bash' 'CSS' 'HTML' 'Python'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Wolfram Alpha' 'MATLAB' 'JavaScript' 'x86'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/devTools </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'GitHub' 'VirtualBox' 'VS Code' 'RStudio'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Rufus' 'WireShark' 'CypherPath' 'PowerShell'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'CMD' 'WSL 2' 'Docker' 'VMWare Workstation'</code></pre>
        </div>



        <h1 className="App fonty pr-72 pt-16 text-2xl">workplace skills</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/social </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Critical Thinking' 'Creativity'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Communication' 'Leadership' 'Management'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Conflict Resolution' 'Problem Solving'</code></pre>
        </div>

        
        <h1 className="App fonty pr-64 pt-16 text-2xl">production skills</h1>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/lighting </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'grandMA3 Hardware/Software' 'troubleshooting'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'programming' 'patch' 'external nodes'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'ETC consoles' 'LED walls' 'MIDI' 'updates'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Vectorworks' 'Capture' 'Resolume' 'DMX'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Art-Net' 'sACN' 'Color Theory' 'Design'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Wiring' 'Basic EE' 'training new techs'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'reading plots' 'universe organization'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/video </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'switching' 'video directing' 'editing'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'camera operating' 'jib camera' 'robo camera'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'graphics' 'live events' 'setup/teardown'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/rigging </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'safety procedures' 'working 40'+' 'truss work'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'jr clancy rig lines' 'hanging curtain'</code></pre>
        </div>

        <h1 className="App fonty pr-72 pt-16 text-2xl">workplace skills</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/social </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Communication' 'Leadership' 'Management'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Conflict Resolution' 'Problem Solving'</code></pre>
        </div>

        <h1 className="App fonty pr-72 pt-16 text-2xl">technical skills</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/languages </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'C++' 'Lua' 'BASH' 'CSS' 'HTML' 'Python'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Wolfram Alpha' 'MATLAB' 'JavaScript'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/devTools </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'CMD' 'GitHub' 'VirtualBox' 'VS Code'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Rufus' 'WireShark' 'CypherPath' 'PowerShell'</code></pre>
        </div>

        <h1 className="App fonty pr-60 pt-16 text-2xl">relevant coursework</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/mathematics </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Calculus III' 'Logic & Proofs' 'Linear Algebra'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Mathematica' 'Discrete Mathematics'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/computerScience </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Data Structures and Algorithms in C++'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Computer Architecture' 'Database Management in SQL'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Linux Operating Systems' 'Python and R in Data Science'</code></pre>
        </div>


        <Footer/>
      </div>
    );
}
