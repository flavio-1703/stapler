import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import Settings from './Pages/Settings/Settings';

/* ROUTER */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className="app">
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>

        </Switch>
      </main>
    </Router>
  );
}

export default App;
