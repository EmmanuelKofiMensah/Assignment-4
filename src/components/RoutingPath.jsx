import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import ResetPassword from "../pages/ResetPassword";
import App from "../App";

const RoutingPath = () => {
  return (
    <BrowserRouter>
      <Switch>
        <App />
        <Route exact path="/dashboard" component={Login} />
        {/* <Route path="/dashboard" component={Dashboard} /> */}
        <Route path="/resetpassword" component={ResetPassword} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutingPath;
