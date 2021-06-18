import React from "react";
import "./App.css";
import Homepage from "./Pages/HomePage/Homepage";
import ShopPage from "./Pages/Shop/Shop.component";
import Header from "./Components/header/header.component";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
