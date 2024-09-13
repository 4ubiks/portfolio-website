import Hero from '../components/hero.js'
import Navbar from '../components/navbar.js'
import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'
// import Diff from '../components/diffusion.js'

import React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => {
    return(
        <div className="fonty ">

          <Hero></Hero>
          <Navbar></Navbar>

          <h1><code>programmer, lighting technology geek, robotics enthusiast</code></h1>
          
          <h1 class="flex justify-center pb-4">
            <div style={{width: 500}} class="border-t border-orange-300"></div>
          </h1>
          
      
          <h1 className='pb-4 pt-8 fonty'>my work:</h1>
          
          <div class="App">
          <Carousel></Carousel>
          </div>
          {/* <h1 className="pt-2 fonty">(find more <a className="underline"><Link to="/portfolio">here</Link></a>!)</h1> */}
      
          {/* <div class="container">
            <div class="iframe-container">
              <iframe class="iframe"
              src="https://www.youtube.com/embed/IYuBYLIOgQQ?si=EqziloJLx4OWhXkX">
              </iframe>
            </div>
          </div> */}
          <div className="autoJustify">
          <div class="flex pb-4 pt-16">
            I've done significant work in various programming languages such as Lua, C++, Python, and Web Development frameworks. In the past few months, I've taken a strong interest in robotics and hardware systems, especially in humanoid robot development and stage lighting products. Currently, I'm looking for opportunities to contribute my skills and passion!
          </div>

          <div class="fonty pt-8">
            As a student at Liberty University, I'm currently involved in the following roles:


            <p class="pt-4">
            ● Ground Station Lead - <a className="underline" rel="noreferrer" href="https://www.liberty.edu/news/2024/07/09/liberty-rocketry-team-earns-top-10-finish-at-spaceport-america-cup/" target="_blank">Liberty Rocketry</a>
            </p>

            <p>
            ● Researcher - Liberty University LASI / <a className="underline" rel="noreferrer" href="https://www.liberty.edu/government/" target="_blank">Liberty University Helms School of Government</a>

            <p>
            ● Treasurer - <a className="underline" rel="noreferrer" href="https://ser-website.vercel.app/" target="_blank">Software Development Club</a>
            </p>
            </p>
          </div>
          </div>
            
          <Footer></Footer>
    
        </div>
    );
}
