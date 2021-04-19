
import './App.css';
import Home from './screens/Home.js';
import About from './screens/About.js'
import Features from './screens/Features'
import Extra from './screens/Extra.js'
import "./style.css";
import Footer from './screens/Footer.js';
import Faq from './screens/Faq.js';
import Servicesb from './screens/Servicesb'
import Pricing from './screens/Pricing.js';
import Testimonial from './screens/Testimonial.js';
import Header from "./screens/Header.js";
import Team from "./screens/Team.js"
import Timeline from "./screens/Timeline"
import MainScreen from "./screens/MainScreen"
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
function App() {
  
  return (
    <Router>
      <div>
        <Route exact={true} path="/" component={MainScreen}></Route>
        <Route exact={true} path="/timeline" component={Timeline}></Route>

      </div>
    </Router>

  );
}

export default App;
