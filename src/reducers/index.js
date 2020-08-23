import { combineReducers } from "redux";
import { ADD_PRODUCTS, ADD_PRODUCT_TO_CART } from "../actions/index";

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
      console.log("called");
      return { ...state, items: [...state.items, action.item] };
    default:
      return state;
  }
}

export default combineReducers({
  products,
  cart,
});
