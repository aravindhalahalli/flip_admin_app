import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn } from "../src/actions";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";

import "./App.css";

import Home from "./containers/Home";
import Category from "./containers/Category";
import Product from "./containers/Product";
import Order from "./containers/Order";

import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";


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
        <PrivateRoute exact path="/category" component={Category} />
        <PrivateRoute  path="/products" component={Product} />
        <PrivateRoute  path="/orders" component={Order} />

        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
