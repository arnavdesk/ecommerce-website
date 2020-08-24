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

// Add multple products to cart
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

// Add a single product
export function addNewProductDB(item) {
  return {
    type: ADD_NEW_PRODUCT,
    item,
  };
}

// edit a single product
export function editProductDB(item) {
  return {
    type: EDIT_PRODUCT,
    item,
  };
}

// delete a single product
export function deleteProductDB(item) {
  return {
    type: DELETE_PRODUCT,
    item,
  };
}

// Async functions for products

// Add multple products to cart on the load fetch from the API
export function addProductsOnLoad() {
  const url = `https://my-json-server.typicode.com/arnavdesk/ecommerce-website/db`;
  return async function (dispatch) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.products) dispatch(addProducts(data.products));
    else dispatch(addProducts([]));
  };
}

export function postANewPorudct(item) {
  const url = `https://my-json-server.typicode.com/arnavdesk/ecommerce-website/products`;
  return async function (dispatch) {
    const formData = new URLSearchParams();
    for (const key in item) {
      formData.append(key, item[key]);
    }
    const response = await fetch(url, {
      method: "post",
      body: formData,
    });
    if (response.status === 201) dispatch(addNewProductDB(item));
    else dispatch({ type: "BLANK" });
  };
}

// Action creators in cart
// Add products to cart

export function addProductToCart(item) {
  return {
    type: ADD_PRODUCT_TO_CART,
    item,
  };
}

// Increase quantity of cart of an item
export function increaseQtyItemOfCart(item) {
  return {
    type: INCREASE_QTY_ITEM_CART,
    item,
  };
}

// decrese quantity of cart of an item
export function decreaseQtyItemOfCart(item) {
  return {
    type: DECREASE_QTY_ITEM_CART,
    item,
  };
}

// delete item of cart
export function deleteItemOfCart(item) {
  return {
    type: DELETE_ITEM_CART,
    item,
  };
}
