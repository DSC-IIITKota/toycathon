import React from 'react';

function Features(){
    return(
        <section id="features" class="features">
        <div class="container">

        <ul class="nav nav-tabs row d-flex">
          <li class="nav-item-fea col-3" data-aos="zoom-in">
            <a class="nav-link active show" data-toggle="tab" href="#tab-1">
            <i class="ri-team-line"></i>
              <h4 class="d-none d-lg-block">Teams</h4>
            </a>
          </li>
          <li class="nav-item-fea col-3" data-aos="zoom-in" data-aos-delay="100">
            <a class="nav-link" data-toggle="tab" href="#tab-2">
            <i class="ri-stack-fill"></i>
              <h4 class="d-none d-lg-block">Judgement</h4>
            </a>
          </li>
          <li class="nav-item-fea col-3" data-aos="zoom-in" data-aos-delay="200">
            <a class="nav-link" data-toggle="tab" href="#tab-3">
            
            <i class="ri-award-fill"></i>
              <h4 class="d-none d-lg-block">Perks</h4>
            </a>
          </li>
          <li class="nav-item-fea col-3" data-aos="zoom-in" data-aos-delay="300">
            <a class="nav-link" data-toggle="tab" href="#tab-4">
            <i class="ri-service-fill"></i>
              <h4 class="d-none d-lg-block">Services</h4>
            </a>
          </li>
        </ul>

        <div class="tab-content" data-aos="fade-up">
          <div class="tab-pane active show" id="tab-1">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>GUIDELINES</h3>
                <p class="font-italic">
                  The guidelines for teams are as follows:
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> The number of members per team can be from a minimum of 1 to a maximum of 3.</li>
                  <li><i class="ri-check-double-line"></i> The hackathon is open to all the college students.</li>
                  <li><i class="ri-check-double-line"></i>You must link to a public code repository for your project.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-1.png" alt="" class="img-fluid"></img>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-2">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>CRITERIA</h3>
                <p>
                The criteria for judging are as follows:
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Originality of the idea, design, functionality and implementation of the idea in a real-time scenario.</li>
                  <li><i class="ri-check-double-line"></i> Judging is based on the software only (web/mobile app and software hack) and any hardware presented to complement the software will not add to the participant's score.</li>
                  <li><i class="ri-check-double-line"></i> Deadline for registration: 15th January 2021.</li>
                  <li><i class="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-2.png" alt="" class="img-fluid"></img>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-3">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>PARTICIPATION PERKS</h3>
                <p>
                What you would gain from participating?
                </p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Awesome schwags</li>
                  <li><i class="ri-check-double-line"></i> Participation certificate</li>
                  <li><i class="ri-check-double-line"></i> Unforgettable skills and experience achieved</li>
                </ul>
                <p class="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-3.png" alt="" class="img-fluid"></img>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="tab-4">
            <div class="row">
              <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                <h3>SERVICES</h3>
                <p> What do we offer ?</p>
                <ul>
                  <li><i class="ri-check-double-line"></i> Serve and build for community</li>
                  <li><i class="ri-check-double-line"></i> Empowering and ingenious : &nbsp;Enabling possibilities and opportunities for students to deliver innovative solutions to real world daunting problems along with harnessing creativity and different visions & perspective of each individual towards present problems.</li></ul>
              </div>
              <div class="col-lg-6 order-1 order-lg-2 text-center">
                <img src="assets/img/features-4.png" alt="" class="img-fluid"></img>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default Features;