import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Banner from './Banner';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

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
          <Route path='/payment'>
            <Header />
            <Banner />
            <Payment />
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
