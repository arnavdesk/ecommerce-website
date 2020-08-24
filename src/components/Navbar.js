import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends React.Component {
  calculateTotalCount = () => {
    const { items } = this.props.cart;
    let total = 0;
    for (const iterator of items) {
      total += iterator.qty;
    }
    return total;
  };

  render() {
    const path = this.props.location.pathname;
    let style1, style2, style3;
    if (path === "/ecommerce-website/") {
      style1 = { backgroundColor: "rgb(28, 88, 152)" };
      style2 = { backgroundColor: "rgb(28, 30, 33)" };
      style3 = { backgroundColor: "white" };
    } else if (path === "/ecommerce-website/add-product") {
      style2 = { backgroundColor: "rgb(28, 88, 152)" };
      style1 = { backgroundColor: "rgb(28, 30, 33)" };
      style3 = { backgroundColor: "white" };
    } else if (path === "/ecommerce-website/cart") {
      style2 = { backgroundColor: "rgb(28, 30, 33)" };
      style1 = { backgroundColor: "rgb(28, 30, 33)" };
      style3 = { backgroundColor: "rgb(28, 88, 152)" };
    }
    return (
      <div className="navbar">
        <Link className="logo-link" to="/ecommerce-website/">
          <img
            className="logo"
            src="https://image.flaticon.com/icons/svg/579/579427.svg"
            alt="Logo"
          ></img>
          <div className="app-name">&nbsp; NinjaMart</div>
        </Link>
        <div className="tabs">
          <Link to="/ecommerce-website/">
            <button style={style1} className="nav-button">
              Products
            </button>
          </Link>
          <Link to="/ecommerce-website/add-product">
            <button style={style2} className="nav-button">
              Add Product
            </button>
          </Link>
        </div>
        <Link className="cart-icon-link" to="/ecommerce-website/cart">
          <div style={style3} className="cart-icon-container">
            <img
              className="cart-icon"
              src="https://image.flaticon.com/icons/svg/779/779006.svg"
              alt="cartIcon"
            ></img>
            <span className="cart-count">{this.calculateTotalCount()}</span>
          </div>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Navbar);
export default withRouter(connectedAppComponent);
