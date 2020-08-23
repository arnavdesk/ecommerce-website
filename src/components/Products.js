import React from "react";
import ProductItem from "./ProductItem";
class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          img:
            "https://images-na.ssl-images-amazon.com/images/I/51kGDXeFZKL._SL1024_.jpg",
          id: 1,
          title: "Apple iPhone 11 (64GB) - Black",
          price: 59900,
          description:
            "iPhone-11 Just the right ammount of everything. Better Camera, Better Design, Better everything",
          rating: 4,
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
