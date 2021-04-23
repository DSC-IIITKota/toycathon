import React from 'react';

function Pricing(){
    return(<section id="sponsors" class="pricing">
    <div class="container">

      <div class="section-title" data-aos="zoom-out">
        <h2>Our Benefactors</h2>
        <p>Sponsors</p>
      </div>
      <h2 data-aos="zoom-out" style={{textAlign:"center",fontSize:"30px",fontWeight:"600", marginBottom: "20px"}}>Gold Sponsors</h2>
      <hr data-aos="zoom-out" style={{width:"200px",background:"#fff",marginBottom:"20px"}}></hr>
      <div class="row sponsor-cards gold">
      {/* <div class="col-lg-4 col-md-6 ">
        <div class="box" data-aos="zoom-in">
               <h3>Free</h3> 
              <img className="sponsor" src="/assets/img/soon.jpg"></img>
              <h4 class="spon-head">GitHub</h4>
            </div>
        </div> */}
      <div class="col-lg-4 col-md-6 mt-4 mt-lg-0 ">
        <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/agora.png"></img>

              <h4 class="spon-head">agora.io</h4>
            </div>
      </div>
    </div>
    <h2 data-aos="zoom-out" style={{textAlign:"center",fontSize:"30px",fontWeight:"600",marginTop:"50px", marginBottom: "20px"}}>Silver Sponsors</h2>
    <hr data-aos="zoom-out" style={{width:"200px",background:"#fff",marginBottom:"20px"}}></hr>

    <div class="row sponsor-cards silver">
        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <a href="https://www.geeksforgeeks.org/" target="_blank" ><img className="sponsor" src="/assets/img/gfg.png"></img></a>

              <a href="https://www.geeksforgeeks.org/" target="_blank"><h4 class="spon-head">GeeksforGeeks</h4></a>
              
            </div>
        </div>
        <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
            {/* <h3>Free</h3> */}
            <img className="sponsor" src="/assets/img/skillenza.jpeg"></img>
            <h4 class="spon-head">Skillenza</h4>
      
          </div>
        </div>
    </div>
    <h2 data-aos="zoom-out" style={{textAlign:"center",fontSize:"30px",fontWeight:"600",marginTop:"50px", marginBottom: "20px"}}>Bronze Sponsors</h2>
    <hr data-aos="zoom-out" style={{width:"200px",background:"#fff",marginBottom:"20px"}}></hr>

    <div class="row sponsor-cards bronze">
    <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
        <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/codechef.jpg"></img>

              <h4 class="spon-head">Codechef</h4>
              
            </div>
        </div>
        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/skillenza.jpeg"></img>

              <h4 class="spon-head">Skillenza</h4>
              
            </div>
        </div>
        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/iiit.png"></img>

              <h4 class="spon-head">IIITians Network</h4>
              
            </div>
        </div>
        <div class="col-lg-6 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
              {/* <h3>Free</h3> */}
              <img className="sponsor" src="/assets/img/GMC.png"></img>

              <h4 class="spon-head">Give My Certificate</h4>
            </div>
        </div>
    </div>

    <h2 data-aos="zoom-out" style={{textAlign:"center",fontSize:"30px",fontWeight:"600",marginTop:"50px", marginBottom: "20px"}}>Title Sponsors</h2>
    <hr data-aos="zoom-out" style={{width:"200px",background:"#fff",marginBottom:"20px"}}></hr>

    <div class="row sponsor-cards bronze">
    <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div class="box" data-aos="zoom-in">
            {/* <h3>Free</h3> */}
            <img className="sponsor" src="/assets/img/dsc.jpeg"></img>
            <h4 class="spon-head">DSC</h4>
      
          </div>
        </div>
    </div>


    </div>
  </section>
  )
}
export default Pricing;


        
        
        
        

       

        

        