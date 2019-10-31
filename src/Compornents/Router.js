import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import TVShows from "Routes/TVShows";
import Search from "Routes/Search";
import Detail from "Routes/Detail";

export default () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/tv" exact component={TVShows} />
    <Route path="/search" exact component={Search} />
    <Route path="/detail" exact component={Detail} />
  </Router>
);