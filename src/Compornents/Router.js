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
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TV} />
        <Route path="/tv/populer" render={() => <h1>Populer</h1>} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/show/:id" component={Detail}/>
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
