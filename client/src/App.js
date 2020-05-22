import React from "react";
import "./App.css";
import Header from "../src/components/header";
import Home from "../src/components/home";
import Footer from "../src/components/footer";
import Card from "../src/components/common/card";
import Collections from "./components/collections";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Switch, Redirect } from "react-router-dom";
// import CollectionGender from "./components/collectionGender";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Switch>
        {/* <Route path="/collections/:gender/:name" component={Type} /> */}
        {/* <Route path="/collections/women" component={Collections} /> */}
        {/* <Route path="/collections/unisex" component={Collections} /> */}
        <Route path="/collections" component={Collections} />
        <Route path="/home" component={Home} />
        <Route path="/card" component={Card} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/home" />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
