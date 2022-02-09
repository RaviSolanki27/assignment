import { Route, Switch } from "react-router-dom";
import "./App.css";
import Assignment2 from "./components/Assignment2/Assignment2";
function App() {
  return (
    <div className="App">
      {/* <Switch>
        <Route exact path="/" component={Task1} />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
      </Switch> */}

      <Assignment2 />
    </div>
  );
}

export default App;
