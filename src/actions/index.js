// Action Types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const INCREASE_QTY_ITEM_CART = "INCREASE_QTY_ITEM_CART";
export const DECREASE_QTY_ITEM_CART = "DECREASE_QTY_ITEM_CART";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";

// Action Creators
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

// Async functions for products
export function addProductsOnLoad() {
  const url = `https://my-json-server.typicode.com/arnavdesk/ecommerce-website/db`;
  return async function (dispatch) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.products) dispatch(addProducts(data.products));
    else dispatch(addProducts([]));
  };
}

// Action creators in cart
export function addProductToCart(item) {
  return {
    type: ADD_PRODUCT_TO_CART,
    item,
  };
}

export function increaseQtyItemOfCart(item) {
  return {
    type: INCREASE_QTY_ITEM_CART,
    item,
  };
}

export function decreaseQtyItemOfCart(item) {
  return {
    type: DECREASE_QTY_ITEM_CART,
    item,
  };
}

export function deleteItemOfCart(item) {
  return {
    type: DELETE_ITEM_CART,
    item,
  };
}
