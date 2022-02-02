import { Route, Switch } from 'react-router-dom';
import './App.css';
import Task1 from './components/Task1/Task1';
import Task2 from './components/Task2/Task2';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Task1} />
        <Route path="/task1" component={Task1} />
        <Route path="/task2" component={Task2} />
      </Switch>
    </div>
  );
}

export default App;
