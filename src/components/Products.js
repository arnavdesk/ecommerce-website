import React from "react";
import ProductItem from "./ProductItem";
import { addProductsOnLoad } from "../actions/index";
import { connect } from "react-redux";

class Products extends React.Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(addProductsOnLoad());
  };

  render() {
    const { items } = this.props.products;
    return (
      <div className="products">
        {items.length > 0 ? (
          items.map((item) => {
            return <ProductItem product={item} key={item.id} />;
          })
        ) : (
          <h1>No Products to show</h1>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

const connectedAppComponent = connect(mapStateToProps)(Products);
export default connectedAppComponent;
