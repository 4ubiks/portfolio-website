import Hero from '../components/hero.js'
import Navbar from '../components/navbar.js'
import Carousel from '../components/carousel.js'
import Footer from '../components/footer.js'

import React from 'react';

export const Home = () => {
    return(
        <div className="App">

        <Hero></Hero>
        <div class="flex justify-center py-4">
          <div style={{width: 975}} class="border-t border-gray-300"></div>
        </div>
        <Navbar></Navbar>

        <p className="fonty">experienced lighting designer, programmer, and director</p>
        
        <div class="flex justify-center pb-4">
          <div style={{width: 500}} class="border-t border-orange-300"></div>
        </div>
        
    
        <h1 className='pb-4 fonty'>my work:</h1>
    
        <Carousel></Carousel>
    
        {/* <div class="container">
          <div class="iframe-container">
            <iframe class="iframe"
            src="https://www.youtube.com/embed/IYuBYLIOgQQ?si=EqziloJLx4OWhXkX">
            </iframe>
          </div>
        </div> */}
          
        <Footer></Footer>
    
        </div>
    );
}
