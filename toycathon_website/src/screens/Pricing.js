import React from 'react';

function Pricing(){
    return(<section id="pricing" class="pricing">
    <div class="container">

      <div class="section-title" data-aos="zoom-out">
        <h2>Our Benefactors</h2>
        <p>Sponsors</p>
      </div>

      <div class="row">

        <div class="col-lg-3 col-md-6">
          <div class="box" data-aos="zoom-in">
            {/* <h3>Free</h3> */}
            <img className="sponsor" src="/assets/img/skillenza.jpeg"></img>

            <h4 class="spon-head">Skillenza</h4>
            <h6>(Platform Partner)</h6>
            
          </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
        <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/codechef.jpg"></img>

              <h4 class="spon-head">Codechef</h4>
              <h6>(Community Partner)</h6>
              
            </div>
        </div>

        <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/skillenza.jpeg"></img>

              <h4 class="spon-head">Skillenza</h4>
              <h6>(Title Partner)</h6>
              
            </div>
        </div>

        
        {/*
        <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
          <div class="box" data-aos="zoom-in" data-aos-delay="300">
            
            <h3>Ultimate</h3>
            <h4><sup>$</sup>49<span> / month</span></h4>
            <ul>
              <li>Aida dere</li>
              <li>Nec feugiat nisl</li>
              <li>Nulla at volutpat dola</li>
              <li>Pharetra massa</li>
              <li>Massa ultricies mi</li>
            </ul>
            
          </div>
        </div> */}

      </div>

    </div>
  </section>)
}
export default Pricing;