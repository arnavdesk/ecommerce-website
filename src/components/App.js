import React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import AddProduct from "./AddProduct";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { addProductsOnLoad } from "../actions/index";

class App extends React.Component {
  componentDidMount = () => {
    const { dispatch, products } = this.props;
    if (products.items.length === 0) dispatch(addProductsOnLoad());
  };
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Route
            exact
            path="/ecommerce-website/"
            render={(props) => <Products {...props} />}
          />
          <Route path="/ecommerce-website/cart" component={Cart} />
          <Route path="/ecommerce-website/add-product" component={AddProduct} />
          <Route path="/ecommerce-website/product" component={SingleProduct} />
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(App);
export default connectedAppComponent;
