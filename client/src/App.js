import React, { Component, Suspense, lazy } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";

const Login = lazy(() => import("./pages/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Register = lazy(() => import("./pages/Register"));
const Camping = lazy(() => import("./pages/Camping"));
const CampingDetail = lazy(() => import("./pages/CampingDetails"));
const Parks = lazy(() => import("./pages/Parks"));
const ParkDetail = lazy(() => import("./pages/ParkDetail"));
const Supplies = lazy(() => import("./pages/Supplies"));
const Hiking = lazy(() => import("./pages/Hiking"));
const ActivityDetail = lazy(() => import("./pages/ActivityDetail"));

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default class App extends Component {
  obj = { name: "bottom" };
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <NavBar title={"Wander Beyond"} />
          <Suspense fallback={<div>Loading...</div>}>
            {/* <div style={{ padding: "4% 6%" }}> */}
              <Switch>
                <Route exact path="/">
                  <Login />
                </Route>
                <Route exact path="/dashboard">
                  <Dashboard />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>
                <Route exact path="/camping">
                  <Camping />
                </Route>
                <Route exact path="/campgrounds/:id">
                  <CampingDetail />
                </Route>
                <Route exact path="/parks">
                  <Parks />
                </Route>
                <Route exact path="/parks/:parkCode">
                  <ParkDetail />
                </Route>
                {/* <Route exact path="/supplies">
                  <Supplies />
                </Route> */}
                <Route exact path="/hiking">
                  <Hiking />
                </Route>
                <Route exact path="/thingstodo/:id">
                  <ActivityDetail />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
              </Switch>
            {/* </div> */}
          </Suspense>
          <Footer />
        </Router>
      </ApolloProvider>
    );
  }
}
