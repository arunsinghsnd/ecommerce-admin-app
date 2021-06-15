import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/HOC/PrivateRoute";
import Home from "./conatiners/Home";
import Signin from "./conatiners/Signin";
import Signup from "./conatiners/Signup";
import { useDispatch, useSelector } from "react-redux";
import { login, isUserLoggedIn } from "../src/actions";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};

export default App;
