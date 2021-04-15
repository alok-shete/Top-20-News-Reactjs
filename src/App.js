import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import Home from "./routes/Home";
import Category from "./routes/Category";
import Country from "./routes/Country";

import Header from "./components/Header";
import AllNews from "./components/AllNews";

function App() {
  // const dispatch = useDispatch();
  const countryCode = useSelector((state) => state.country);
  return (
    <>
      <Router>
        <Header />
        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <span className="p-2 text-muted"></span>
            <Link className="p-2 text-muted" to={`/${countryCode}/business`}>
              Business
            </Link>
            <Link
              className="p-2 text-muted"
              to={`/${countryCode}/entertainment`}
            >
              Entertainment
            </Link>
            <Link className="p-2 text-muted" to={`/${countryCode}/health`}>
              Health
            </Link>
            <Link className="p-2 text-muted" to={`/${countryCode}/science`}>
              Science
            </Link>
            <Link className="p-2 text-muted" to={`/${countryCode}/sports`}>
              Sports
            </Link>
            <Link className="p-2 text-muted" to={`/${countryCode}/technology`}>
              Technology
            </Link>
            <span className="p-2 text-muted"></span>
          </nav>
        </div>
        <AllNews />
        <Switch>
          <Route path="/:country/:category">
            <Category />
          </Route>
          <Route path="/:country">
            <Country />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
