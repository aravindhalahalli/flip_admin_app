import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "../src/actions";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Product from "./containers/Product";
import Order from "./containers/Order";


function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute  path="/products" component={Product} />
        <PrivateRoute  path="/orders" component={Order} />

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
