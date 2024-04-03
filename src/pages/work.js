import React from 'react';
import Hero from '../components/hero.js';
import Timeline from '../components/timeline.js';
import Footer from '../components/footer.js';

export const Work = () => {
     return(
      <div>
         <Hero></Hero>

         <div class="flex justify-center py-4">
          <div style={{width: 975}} class="border-t border-gray-300"></div>
         </div>
         
         <Timeline></Timeline>
         <Footer/>
      </div>
     )
}