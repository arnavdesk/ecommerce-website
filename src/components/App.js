import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import Cart from "./Cart";
import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart} />
        <Route path="/add-product" component={AddProduct} />
      </Router>
    </div>
  );
}

export default App;
