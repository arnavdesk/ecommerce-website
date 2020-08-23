// Action Types
export const ADD_PRODUCTS = "ADD_PRODUCTS";

// Action Creators

export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function addProductsOnLoad(product) {
  const url = `https://my-json-server.typicode.com/arnavdesk/ecommerce-website/db`;
  return async function (dispatch) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.products) dispatch(addProducts(data.products));
    else dispatch(addProducts([]));
  };
}
