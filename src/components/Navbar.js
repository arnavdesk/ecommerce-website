import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img
          className="logo"
          src="https://image.flaticon.com/icons/svg/579/579427.svg"
          alt="Logo"
        ></img>
        <div className="app-name">&nbsp; NinjaMart</div>
        <div className="tabs">
          <button className="nav-button">Products</button>
          <button className="nav-button">Add Product</button>
        </div>
        <div className="cart-icon-container">
          <img
            className="cart-icon"
            src="https://image.flaticon.com/icons/svg/779/779006.svg"
            alt="cartIcon"
          ></img>
          <span className="cart-count">5</span>
        </div>
      </div>
    );
  }
}

export default Navbar;
