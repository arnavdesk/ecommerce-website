import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img:
            "https://www.gizmochina.com/wp-content/uploads/2019/09/Apple-iPhone-11-1.jpg",
          id: 1,
        },
        {
          price: 99,
          title: "Watch",
          qty: 10,
          img:
            "https://assets.croma.com/medias/sys_master/images/images/hda/h37/8869088690206/221272_pjpeg.jpg",
          id: 2,
        },
        {
          price: 99999,
          title: "Laptop",
          qty: 1,
          img:
            "https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._SX466_.jpg",
          id: 3,
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((item) => {
          return <CartItem product={item} />;
        })}
      </div>
    );
  }
}

export default Cart;
