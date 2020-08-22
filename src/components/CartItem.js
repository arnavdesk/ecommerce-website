import React from "react";

const CartItem = (props) => {
  const { product } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img className="cart-item-img" src={product.img} alt="product" />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
          {product.price}
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
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/753/753340.svg"
            alt="Decrease"
          />
          <img
            className="action-icons"
            src="https://image.flaticon.com/icons/svg/3221/3221897.svg"
            alt="Delete"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
