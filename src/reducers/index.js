import { combineReducers } from "redux";
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART } from "../actions/index";
import Noty from "noty";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/nest.css";

// Show Notification
const showNotification = (text) => {
  new Noty({
    text: text,
    layout: "bottomRight",
    theme: "nest",
    type: "alert",
    timeout: 500,
  }).show();
};

const initialProductsState = {
  items: [],
};

export function products(state = initialProductsState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, items: action.items };
    default:
      return state;
  }
}

const initialCartState = {
  items: [],
};

export function cart(state = initialCartState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let index = state.items.indexOf(action.item);
      showNotification("1 Item added to cart");
      if (index === -1) {
        action.item.qty = 1;
        return { ...state, items: [...state.items, action.item] };
      } else {
        const newState = { ...state };
        newState.items[index].qty++;
        return newState;
      }
    default:
      return state;
  }
}

export default combineReducers({
  products,
  cart,
});
