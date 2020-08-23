import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" render={(props) => <Products {...props} />} />
        <Route path="/cart" component={Cart} />
        <Route path="/add-product" component={AddProduct} />
      </Router>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
