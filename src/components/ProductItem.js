import React from "react";
import { connect } from "react-redux";
import { addProductToCart } from "../actions/index";
import { editProductDB, deleteProductDB } from "../actions/index";
import { withRouter } from "react-router-dom";

class ProductItem extends React.Component {
  constructor() {
    super();
    this.state = {
      editable: false,
    };
    this.nameRef = React.createRef();
    this.desRef = React.createRef();
    this.priceRef = React.createRef();
    this.ratingRef = React.createRef();
  }

  // After editing dispatch an action and save product.
  saveAfterEdit = () => {
    const { dispatch, product } = this.props;
    const editProduct = {};
    editProduct.title = this.nameRef.current.value;
    editProduct.description = this.desRef.current.value;
    editProduct.price = this.priceRef.current.value;
    editProduct.rating = this.ratingRef.current.value;
    editProduct.id = product.id;
    editProduct.img = product.img;
    dispatch(editProductDB(editProduct));
    this.setState({ editable: false });
  };

  // Stop editing
  cancelEdit = () => {
    this.setState({ editable: false });
  };

  // Start editing.
  startEditing = () => {
    this.setState({ editable: true });
  };

  // Add an item to cart, dispatch action.
  addToCart = () => {
    const { dispatch } = this.props;
    dispatch(addProductToCart(this.props.product));
  };

  // Render function.
  render() {
    const { editable } = this.state;
    const { product, dispatch } = this.props;
    return (
      <div
        onClick={(event) => {
          if (
            event.target.className === "action-button" ||
            event.target.className === "action-icons" ||
            event.target.className === "edit-text"
          ) {
            return;
          }
          this.props.history.push(
            "/ecommerce-website/product?id=" + product.id
          );
        }}
        className="product-item"
        id={"item" + product.id}
      >
        <div className="left-block-products">
          <img className="product-item-img" src={product.img} alt="product" />
        </div>
        {!editable && (
          <div className="end-block-products">
            <div style={{ fontSize: 25 }}>{product.title}</div>
            <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
              Rs. {product.price}
            </div>
            <div style={{ fontSize: 18, color: "#777", marginTop: 5 }}>
              Rating : {product.rating}
            </div>
            <div>Description : {product.description}</div>
            <div className="products-actions">
              <button className="action-button" onClick={this.addToCart}>
                Add to Cart
              </button>
              <img
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/684/684930.svg"
                alt="Edit"
                onClick={this.startEditing}
              />
              <img
                className="action-icons"
                src="https://image.flaticon.com/icons/svg/3221/3221897.svg"
                alt="Delete"
                onClick={() => {
                  dispatch(deleteProductDB(product));
                }}
              />
            </div>
          </div>
        )}
        {editable && (
          <div className="end-block-products">
            <input
              className="edit-text"
              ref={this.nameRef}
              style={{ fontSize: 25 }}
              defaultValue={product.title}
            ></input>
            <div>
              Rs.
              <input
                className="edit-text"
                ref={this.priceRef}
                style={{
                  width: "70px",
                  fontSize: 18,
                  color: "#777",
                  marginTop: 5,
                }}
                defaultValue={product.price}
              ></input>
            </div>
            <div>
              Rating :
              <input
                className="edit-text"
                ref={this.ratingRef}
                style={{
                  width: "30px",
                  fontSize: 18,
                  color: "#777",
                  marginTop: 5,
                }}
                defaultValue={product.rating}
              ></input>
            </div>
            <div>
              Description :{" "}
              <input
                className="edit-text"
                ref={this.desRef}
                style={{ width: "100%" }}
                defaultValue={product.description}
              ></input>
            </div>
            <div className="products-actions">
              <button className="action-button" onClick={this.cancelEdit}>
                Cancel
              </button>
              <button className="action-button" onClick={this.saveAfterEdit}>
                Save
              </button>
            </div>
          </div>
        )}
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

const connectedAppComponent = connect(mapStateToProps)(ProductItem);
export default withRouter(connectedAppComponent);
