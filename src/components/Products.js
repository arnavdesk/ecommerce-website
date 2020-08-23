import React from "react";
import ProductItem from "./ProductItem";
class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          title: "Red Chair",
          price: 2000,
          description: "Red color chair super cool.",
          rating: 5,
        },
        {
          id: 2,
          title: "Green Chair",
          price: 2000,
          description: "Green color chair super cool.",
          rating: 4,
        },
        {
          id: 3,
          title: "Blue Chair",
          price: 2000,
          description: "Blue color chair super cool.",
          rating: 3,
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="products">
        {products.map((item) => {
          return <ProductItem product={item} />;
        })}
      </div>
    );
  }
}

export default Products;
