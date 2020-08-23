// Action Types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const INCREASE_QTY_ITEM_CART = "INCREASE_QTY_ITEM_CART";
export const DECREASE_QTY_ITEM_CART = "DECREASE_QTY_ITEM_CART";
export const DELETE_ITEM_CART = "DELETE_ITEM_CART";
export const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
export const EDIT_PRODUCT = "EDIT_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// Action Creators for products
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

export function addNewProductDB(item) {
  return {
    type: ADD_NEW_PRODUCT,
    item,
  };
}

export function editProductDB(item) {
  return {
    type: EDIT_PRODUCT,
    item,
  };
}

export function deleteProductDB(item) {
  return {
    type: DELETE_PRODUCT,
    item,
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
