import React from 'react';

function Testimonial(){
    return(
        <section id="speakers" class="testimonials">
        <div class="container">
  
          <div class="section-title" data-aos="zoom-out">
            <h2>Speakers</h2>
            <p>Our Guests</p>
        </div>

          <div class="row speakers">
            <div class="card speak_card">
              <img class="card-img-top" src="assets/img/speaker1.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <p class="card-text">Sanath Murali</p>
              </div>
            </div>

            {/* <div class="card speak_card" data-aos="zoom-in" data-aos-delay="200" >
              <img class="card-img-top" src="assets/img/testimonials/testimonials-2.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>

            <div class="card speak_card" data-aos="zoom-in" data-aos-delay="400">
              <img class="card-img-top" src="assets/img/testimonials/testimonials-3.jpg" alt="Card image cap"></img>
              <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>*/}
          </div> 
          
  
        </div>
      </section>
    )
}
export default Testimonial;
