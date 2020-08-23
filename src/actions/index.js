// Action Types
export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

// Action Creators
export function addProducts(items) {
  return {
    type: ADD_PRODUCTS,
    items,
  };
}

export function addProductsOnLoad() {
  const url = `https://my-json-server.typicode.com/arnavdesk/ecommerce-website/db`;
  return async function (dispatch) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.products) dispatch(addProducts(data.products));
    else dispatch(addProducts([]));
  };
}

export function addProductToCart(item) {
  return {
    type: ADD_PRODUCT_TO_CART,
    item,
  };
}
