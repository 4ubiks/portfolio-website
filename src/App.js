import logo from './logo.svg';
import './App.css';
import Hero from './components/hero.js'
import Navbar from './components/navbar.js'

function App() {
  return (
    <div className="App">
       
      <Navbar></Navbar> 
      <Hero></Hero>
     
     <h1 className="text-9xl">lighting designer</h1>
     <p className="text-5xl py-16">experienced lighting technician, designer, and programmer. </p>

     <p className="text-5xl py-64">my work: </p>

     <div className="carousel carousel-center rounded-box scale py-10">
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" alt="Pizza" />
        </div> 
        <div className="carousel-item">
          <img src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" alt="Pizza" />
        </div>
      </div>

     
      
       
        
    </div>
  );
}

export default App;
