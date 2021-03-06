import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Banner from './Banner';
import Home from './Home';
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe('pk_test_51I8srBEGXsNNlzr91jIENuAccz7FfPEIEl5qfoMq4r0WcxRk6CbGwSivXlsyQFP2rD9qqc78cR6WAXEUHYAVOL8r00bFammH8B');


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
    <>
      <div className="content">
        <Router>
          {/* <div className="app"> ---------------------*/}
          <Switch>
            <Route path='/orders'>
              <Header />
              {/* <Banner /> */}
              <Orders />
              {/* <Footer /> */}
            </Route>
            <Route path='/login'>
              {/* <Banner /> */}
              <Login />
              {/* <Footer /> */}
            </Route>
            <Route path='/checkout'>
              <Header />
              {/* <Banner /> */}
              <Checkout />
              {/* <Footer /> */}
            </Route>
            <Route path='/payment'>
              <Header />
              {/* <Banner /> */}
              <Elements stripe={promise}>
                <Payment />
              </Elements>
              {/* <Footer /> */}
            </Route>
            <Route path='/'>
              <Header />
              <Banner />
              <Home />
              {/* <Footer /> */}
            </Route>
          </Switch>
          {/* </div> --------------------------------*/}
        </Router>
      </div>
      <Footer className='appClass_footer' />
    </>
  );
}

export default App;
