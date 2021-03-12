import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js'
import Features from './Features.js'
import Header from './Header.js'
import CTA from './CTA.js'
import "./style.css";
import Footer from './Footer.js';
import Faq from './Faq.js';
import Services from './Services'
import Pricing from './Pricing.js';
import Testimonial from './Testimonial.js';

function App() {
  
  return (
    <div>
    <Home></Home>
      <main id="main">
        <About></About>
        <Features></Features>
        <CTA></CTA>
        <Services></Services>
        <Testimonial></Testimonial>
        <Pricing></Pricing>
        <Faq></Faq>
        </main>
      <Footer></Footer>
      
    </div>

  );
}

export default App;
