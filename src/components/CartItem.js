import React from "react";
import { connect } from "react-redux";
import {
  increaseQtyItemOfCart,
  decreaseQtyItemOfCart,
  deleteItemOfCart,
} from "../actions/index";

const CartItem = (props) => {
  const { product, dispatch } = props;

  return (
    <div className="cart-item">
      <div className="left-block">
        <img className="cart-item-img" src={product.img} alt="product" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
          Rs. {product.price}
        </div>
        <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
          Qty : {product.qty}
        </div>
      </div>
      <div className="end-block">
        <div className="cart-item-actions">
          {/* buttons */}
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/929/929409.svg"
            alt="Increase"
            onClick={() => {
              dispatch(increaseQtyItemOfCart(product));
            }}
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/753/753340.svg"
            alt="Decrease"
            onClick={() => {
              dispatch(decreaseQtyItemOfCart(product));
            }}
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/3221/3221897.svg"
            alt="Delete"
            onClick={() => {
              dispatch(deleteItemOfCart(product));
            }}
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

const connectedAppComponent = connect(mapStateToProps)(CartItem);
export default connectedAppComponent;
