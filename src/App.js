import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import "./styles/reset.css";
import "./styles/main.css";

const Resume = lazy(() => import("./pages/Resume/Resume"));
const About = lazy(() => import("./pages/About/About"));
const Portfolio = lazy(() => import("./pages/Portfolio/Portfolio"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

export default class App extends Component {
  obj = { name: "bottom" };
  render() {
    return (
      <Router>
        <Navigation title={"Matthew St. Onge"} />
        <Suspense fallback={<div>Loading...</div>}>
          <div style={{padding: '4% 6%'}}>
          <Switch>
            <Route exact path="/"><About /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/portfolio"><Portfolio /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/Resume"><Resume /></Route>
          </Switch>
          </div>
        </Suspense>
        <Footer />
      </Router>
    );
  }
}
