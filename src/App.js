import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from './Banner';
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path='/login'>
            <Banner />
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Banner />
            <Checkout />
          </Route>
          <Route path='/'>
            <Header />
            <Banner />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
