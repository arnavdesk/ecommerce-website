import React, { Component } from "react";
import { connect } from "react-redux";
import { postANewPorudct } from "../actions/index";
import { showNotification } from "../config/notification";

class AddProduct extends Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
    this.desRef = React.createRef();
    this.priceRef = React.createRef();
    this.ratingRef = React.createRef();
    this.imageRef = React.createRef();
  }

  // Handle adding a new product
  addNewProduct = () => {
    const { dispatch } = this.props;
    const newProduct = {};
    newProduct.title = this.nameRef.current.value;
    newProduct.description = this.desRef.current.value;
    newProduct.price = this.priceRef.current.value;
    newProduct.rating = this.ratingRef.current.value;
    newProduct.img = this.imageRef.current.value;
    if (
      newProduct.title === "" ||
      newProduct.description === "" ||
      newProduct.price === "" ||
      newProduct.rating === "" ||
      newProduct.img === ""
    ) {
      showNotification("No field can be blank");
      return;
    }
    dispatch(postANewPorudct(newProduct));
    this.props.history.push(
      "/ecommerce-website/#item" + (this.props.products.items.length + 1)
    );
  };
  render() {
    return (
      <div className="add-prod-div">
        <h2>Add a Product</h2>
        <div className="form-add-prod">
          <label>Name</label>
          <input type="text" id="name" ref={this.nameRef}></input>
          <label>Description</label>
          <input type="text" id="description" ref={this.desRef}></input>
          <label>Price</label>
          <input type="text" id="price" ref={this.priceRef}></input>
          <label>Rating</label>
          <input type="text" id="rating" ref={this.ratingRef}></input>
          <label>Image Link</label>
          <input type="text" id="img" ref={this.imageRef}></input>
          <button
            className="action-button"
            onClick={() => this.addNewProduct()}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

// Use context API and connect state to props.
function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const connectedAppComponent = connect(mapStateToProps)(AddProduct);
export default connectedAppComponent;
