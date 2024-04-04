import Hero from '../components/hero.js'
import Navbar from '../components/navbar.js'
import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
import React from 'react'

export const Skills = () => {
    return(
      <div>
        <Hero></Hero>

        <div class="flex justify-center py-4 pb-8">
          <div style={{width: 975}} class="border-t border-gray-300"></div>
        </div>

        <h1 className="App fonty pr-64 text-2xl">production skills</h1>
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
          <pre data-prefix=">" className="text-success"><code>'C++' 'Lua' 'JavaScript' 'CSS' 'HTML' 'Python'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Wolfram Alpha' 'MATLAB'</code></pre>
        </div>
        <div className="py-4"></div>
        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/devTools </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Linux' 'GitHub' 'VirtualBox' 'Visual Studio Code'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Rufus' 'WireShark' 'CypherPath' 'PowerShell / CMD'</code></pre>
        </div>

        <h1 className="App fonty pr-60 pt-16 text-2xl">mathematical skills</h1>

        <div className="mockup-code">
          <code className="pl-8"><code className="codeColorBlue">~/courses </code>$ ls</code>
          <pre data-prefix=">" className="text-success"><code>'Calculus III' 'Logic & Proofs' 'Linear Algebra'</code></pre>
          <pre data-prefix=">" className="text-success"><code>'Mathematica' 'Discrete Mathematics'</code></pre>
        </div>


        <Footer/>
      </div>
    );
}