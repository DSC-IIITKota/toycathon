import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import About from './About.js'
import Features from './Features.js'
import Header from './Header.js'
import "./style.css";


function App() {
  return (
    <div>
    <Home></Home>
    <Header></Header>
      <main id="main">
        <About></About>
        <Features></Features>
      </main>
    </div>

  );
}

export default App;
