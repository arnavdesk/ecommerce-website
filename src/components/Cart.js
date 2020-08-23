import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
class Cart extends React.Component {
  render() {
    const { items } = this.props.cart;
    return (
      <div className="cart">
        {items.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Cart);
export default connectedAppComponent;
