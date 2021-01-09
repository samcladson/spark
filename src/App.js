import "./App.css";
import Home from "./components/home";
import Video from "./components/Webcam";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route component={Home} path="/"  exact/>
        <Route component={Video} path="/Video/:id" exact/>
      </Router>
      
    </div>
  );
};

export default App;
