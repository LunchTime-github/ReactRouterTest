import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Compornents/Header";
import Home from "Routes/Home";
import TV from "Routes/TV";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/ReactRouterTest/" exact component={Home} />
        <Route path="/ReactRouterTest/tv" exact component={TV} />
        <Route path="/ReactRouterTest/search" component={Search} />
        <Route path="/ReactRouterTest/movie/:id" component={Detail}/>
        <Route path="/ReactRouterTest/tv/:id" component={Detail}/>
        <Redirect from="*" to="/ReactRouterTest" />
      </Switch>
    </>
  </Router>
);
