import React from "react";
import CartItem from "./CartItem";
import { connect } from "react-redux";
class Cart extends React.Component {
  // Calculate total price for cart.
  calculateTotal(items) {
    let price = 0;
    for (const iterator of items) {
      price += iterator.price * iterator.qty;
    }
    return price;
  }

  render() {
    const { items } = this.props.cart;
    const totalPrice = this.calculateTotal(items);
    return (
      <div className="cart">
        {items.map((item) => {
          return <CartItem product={item} key={item.id} />;
        })}
        {items.length > 0 ? (
          <div style={{ marginLeft: "auto" }}>Total Price : {totalPrice}</div>
        ) : (
          <h1>Cart Empty!</h1>
        )}
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
