import React from 'react'
function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
       <div className="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
         <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
       </div>
       <div className="carousel-inner">
        <div className="carousel-item active">
         <img src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg" className="d-block w-100 h-100vh"  alt="..."/>
        <div className="carousel-caption slider-inner">
      
      </div>
     </div>
    <div className="carousel-item ">
      <img src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
    </div>
      
    </div>
    
    <div className="carousel-item">
      <img src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption ">
     
    </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption slider-inner">
        
      </div>
    </div>
  </div>

  
</div>
  )
}

export default Slider