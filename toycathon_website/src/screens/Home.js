import React from 'react';

function Home(){
    return (
        <div>
            <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-ride="carousel">

      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Welcome to <span>Toy and Animation Hackathon</span></h2>
          <p class="animate__animated fanimate__adeInUp">Every idea is worth a try, no big ones got it in single go.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">A platform</h2>
          <p class="animate__animated animate__fadeInUp">for the innovators or entrepreneurs of tomorrow to start today towards a smarter India.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>

      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Opportunity</h2>
          <p class="animate__animated animate__fadeInUp">to gain knowledge on developer technologies, experience of building real world applications.</p>
          <a href="#about" class="btn-get-started animate__animated animate__fadeInUp scrollto">Register</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

    </div>
  </section>
        </div>
  )}

export default Home;
