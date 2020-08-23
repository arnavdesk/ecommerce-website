import { combineReducers } from "redux";

const initialProductsState = {
  products: [],
};

export function products(state = initialProductsState, action) {
  return state;
}

const initialCartState = {
  products: [],
};

export function cart(state = initialCartState, action) {
  return state;
}

export default combineReducers({
  products,
  cart,
});
