import Home from "./components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Admin from "./components/Admin/index";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={Admin} exact />
      </Router>
    </div>
  );
};

export default App;
