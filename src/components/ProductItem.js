import React from "react";

const ProductItem = (props) => {
  const { product } = props;
  return (
    <div className="product-item">
      <div className="left-block-products">
        <img className="product-item-img" src={product.img} alt="product" />
      </div>
      <div className="right-block-products">
        <div style={{ fontSize: 25 }}>{product.title}</div>
        <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
          {product.price}
        </div>
        <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
          Rating : {product.rating}
        </div>
      </div>
      <div className="end-block-products">
        <div>
          <div>Description : {product.description}</div>
          <div className="products-actions">
            <button className="action-button">Add to Cart</button>
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/684/684930.svg"
              alt="Edit"
            />
            <img
              className="action-icons"
              src="https://image.flaticon.com/icons/svg/3221/3221897.svg"
              alt="Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
