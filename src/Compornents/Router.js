import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Header from "Compornents/Header";
import Home from "Routes/Home";
import TVShows from "Routes/TVShows";
import Search from "Routes/Search";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" component={TVShows} />
        <Route path="/tv/populer" render={() => <h1>Populer</h1>} />
        <Route path="/search" component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
