import React from 'react';

function About(){
    return(
        <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>About Us</h2>
          <p>Who are we? </p>
        </div>

        <div class="row content" data-aos="fade-up">
          <div class="col-lg-6">
            <p>
            Google Developer Student Clubs are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a DSC: 
            </p>
            <ul>
              <li><i class="ri-check-double-line"></i> Students grow their knowledge in a peer-to-peer learning environment </li>
              <li><i class="ri-check-double-line"></i> Learn new skills and latest technology out there</li>
              <li><i class="ri-check-double-line"></i> Share ideas, collaborate and build amazing projects</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
            Developer Student Clubs IIIT Kota, powered by Google Developers, is a diverse community of coding enthusiasts and student developers to learn and grow in a peer-to-peer learning environment. It provides opportunities to gain knowledge on developer technologies, have hands-on experience of building real world applications via workshops and events. We teach various technical skills to build innovative minds that encourage students in making prototypes, real-time projects and to provide solutions for local businesses and their community. 
            </p>
            <a href="https://www.linkedin.com/in/developer-student-club-iiit-kota" target="_blank"  class="btn-learn-more">Learn More</a>
          </div>
        </div>

      </div>
    </section>
    )
}
export default About; 