import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";
import PickedProduct from "./Components/PickedProduct/PickedProduct";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import ShoppingCart from "./Components/Shopping-cart/ShoppingCart";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={PickedProduct} />
          <Route path="/products" exact component={Products} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
} //Enbart sidans adresser på den här sidan

export default App;

/*
<Route exact path="/">
{/* <Route exact path="/products" component={Products}> }
<Route exact path="/">
  <Route exact path="/">
    <Route exact path="/">
      { <Route
      exact
      path="/Shopping-cart/ShoppingCart"
      component={ShoppingCart}
    > }
      <Navbar />
      <Products />
      <Footer />
    </Route>{" "}
  </Route>{" "}
</Route>{" "}
</Route> */
