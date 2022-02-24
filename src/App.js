import "./App.css";
import Home from "./components/Home";
import Filter from "./components/Filter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filter/:param" component={Filter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
