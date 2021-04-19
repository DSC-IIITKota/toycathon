
import './App.css';
import "./style.css";
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
        <Route path="/timeline" component={Timeline}></Route>

      </div>
    </Router>

  );
}

export default App;
