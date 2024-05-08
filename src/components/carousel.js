import React, {useState} from 'react';



export default function Carousel(){
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
    return(
      <div style={{width:765}}class="carousel carousel-center rounded-box">
      <div class="carousel-item">
        <div className="ease-in-out hover:scale-110 duration-300 relative"
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}>
            <img src={require('../img/proj1.jpg')} alt="Pizza" class="w-96"/>
            {isHovered5 && <h1 className="textual">Lighting Technician</h1>}
            {isHovered5 && <h1 className="textual2">The Wiz - Alluvion Stages</h1>}
          </div>
        </div>
        <div className="carousel-item relative">
        <div class="ease-in-out hover:scale-110 duration-300 relative"        
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <img src={require('../img/proj2.jpg')} alt="Pizza" class="w-96"/>
          {isHovered && <h1 className="textual">Capture Render</h1>}
          {isHovered && <h2 className="textual2">mockup for fun</h2>}
        </div> 
        </div>

        <div class="carousel-item">
          <div className="ease-in-out hover:scale-110 duration-300 relative"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}>
          <img src={require('../img/proj3.jpg')} alt="Pizza" class="w-96"/>
          {isHovered2 && <h1 className="textual">Lighting Technician</h1>}
          {isHovered2 && <h1 className="textual2">Titanic the Musical</h1>}
          </div>
        </div> 
        <div class="carousel-item">
          <div className="ease-in-out hover:scale-110 duration-300 relative"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}>
            <img src={require('../img/proj4.jpg')} alt="Pizza" class="w-96"/>
            {isHovered3 && <h1 className="textual">Lighting Technician</h1>}
            {isHovered3 && <h1 className="textual2">Sonic-Con Audio Convention</h1>}
          </div>
        </div> 
        <div class="carousel-item">         
        <div className="ease-in-out hover:scale-110 duration-300 relative"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}>
            <img src={require('../img/proj5.jpg')} alt="Pizza" class="w-96"/>
            {isHovered4 && <h1 className="textual">Christmas Design</h1>}
            {isHovered4 && <h1 className="textual2">Cherry Hills Community Church</h1>}
          </div>
        </div>
        
        <div class="carousel-item">
        <div className="ease-in-out hover:scale-110 duration-300 relative"
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}>
            <img src={require('../img/proj6.jpg')} alt="Pizza" class="w-96"/>
            {isHovered6 && <h1 className="textual">Lighting Designer</h1>}
            {isHovered6 && <h1 className="textual2">'The Violinist'</h1>}
          </div>
        </div>
        
      </div>
       
    )
}