import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      sorted: false,
    };
  }

  sortedOff = () => {
    this.setState({ sorted: false });
  };

  sortedOn = () => {
    this.setState({ sorted: true });
  };

  render() {
    const { sorted } = this.state;
    const { items } = this.props.products;
    const sortedList = [...items];
    sortedList.sort(function (a, b) {
      return a.price - b.price;
    });

    let listToRender;

    if (sorted === true) {
      listToRender = sortedList;
    } else {
      listToRender = items;
    }

    return (
      <div className="products">
        <div className="sort-btn">
          <div onClick={this.sortedOn}>Sort By Price &nbsp;</div>
          {sorted && (
            <img
              src="https://image.flaticon.com/icons/svg/561/561189.svg"
              alt="cross"
              onClick={this.sortedOff}
            ></img>
          )}
        </div>
        {listToRender.length > 0 ? (
          listToRender.map((item) => {
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
