import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="logo-link" to="/">
          <img
            className="logo"
            src="https://image.flaticon.com/icons/svg/579/579427.svg"
            alt="Logo"
          ></img>
          <div className="app-name">&nbsp; NinjaMart</div>
        </Link>
        <div className="tabs">
          <Link to="/">
            <button className="nav-button">Products</button>
          </Link>
          <Link to="/add-product">
            <button className="nav-button">Add Product</button>
          </Link>
        </div>
        <Link className="cart-icon-link" to="/cart">
          <div className="cart-icon-container">
            <img
              className="cart-icon"
              src="https://image.flaticon.com/icons/svg/779/779006.svg"
              alt="cartIcon"
            ></img>
            <span className="cart-count">5</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default Navbar;
