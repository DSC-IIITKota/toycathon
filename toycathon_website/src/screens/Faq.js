import React from 'react';

function Faq(){
    return(
        <section id="faq" class="faq">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <ul class="faq-list">

          <li data-aos="fade-up" data-aos-delay="100">
            <a data-toggle="collapse" class="" href="#faq1">Is this hackathon an online event or offline? <i class="icofont-simple-up"></i></a>
            <div id="faq1" class="collapse show" data-parent=".faq-list">
              <p>
              It is an online event.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="200">
            <a data-toggle="collapse" href="#faq2" class="collapsed">Who is eligible to participate? <i class="icofont-simple-up"></i></a>
            <div id="faq2" class="collapse" data-parent=".faq-list">
              <p>
               Student currently studying in college are allowed to participate.              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="300">
            <a data-toggle="collapse" href="#faq3" class="collapsed">Is there any registration fee? <i class="icofont-simple-up"></i></a>
            <div id="faq3" class="collapse" data-parent=".faq-list">
              <p>
              No, registration is completely free of cost.
              </p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="400">
            <a data-toggle="collapse" href="#faq4" class="collapsed">Can I participate without a team? <i class="icofont-simple-up"></i></a>
            <div id="faq4" class="collapse" data-parent=".faq-list">
              <p>
              No, it is a team event.Participants need to form a team of minimum two and maximum four members before registration.</p>
            </div>
          </li>

          <li data-aos="fade-up" data-aos-delay="500">
            <a data-toggle="collapse" href="#faq5" class="collapsed">Still got questions? <i class="icofont-simple-up"></i></a>
            <div id="faq5" class="collapse" data-parent=".faq-list">
              <p>
              Contact us at dsc@iiitkota.ac.in .</p>
            </div>
          </li>
        </ul>
      </div>

    </section>
    )

    }
export default Faq;