import { combineReducers } from "redux";
import { showNotification } from "../config/notification";
import {
  ADD_PRODUCTS,
  ADD_PRODUCT_TO_CART,
  INCREASE_QTY_ITEM_CART,
  DECREASE_QTY_ITEM_CART,
  DELETE_ITEM_CART,
  ADD_NEW_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/index";
import "../../node_modules/noty/lib/noty.css";
import "../../node_modules/noty/lib/themes/sunset.css";

const initialProductsState = {
  items: [],
};

// Handle products
export function products(state = initialProductsState, action) {
  switch (action.type) {
    // Add products to cart
    case ADD_PRODUCTS:
      return { ...state, items: action.items };
    // Add any new products
    case ADD_NEW_PRODUCT: {
      action.item.id = state.items.length + 1;
      showNotification("Product Added");
      return { ...state, items: [...state.items, action.item] };
    }
    // Edit a product (find by ID the index, remove orignal item, add new item at index.)
    case EDIT_PRODUCT: {
      let index;
      const filteredItems = state.items.filter(function (element, i) {
        if (element.id === action.item.id) {
          index = i;
        }
        return element.id !== action.item.id;
      });
      if (index === -1) {
        showNotification("Item not found");
        return state;
      } else {
        showNotification("Item edited");
        filteredItems.splice(index, 0, action.item);
        return { ...state, items: filteredItems };
      }
    }
    // Delete a particular product
    case DELETE_PRODUCT: {
      const filteredItems = state.items.filter(function (element) {
        return element.id !== action.item.id;
      });
      showNotification("Removed From Listing");
      return { ...state, items: filteredItems };
    }
    default:
      return state;
  }
}

const initialCartState = {
  items: [],
};

// Handle cart
export function cart(state = initialCartState, action) {
  switch (action.type) {
    // Find product by id, if not added into the cart first
    // add create new state and increase the quantity
    case ADD_PRODUCT_TO_CART:
    case INCREASE_QTY_ITEM_CART: {
      console.log(state);
      let index = state.items.findIndex(function (element) {
        return element.id === action.item.id;
      });
      if (index === -1) {
        showNotification("1 Item added to cart");
        action.item.qty = 1;
        return { ...state, items: [...state.items, action.item] };
      } else {
        showNotification("Quantity increased by 1");
        const newState = { ...state };
        newState.items[index].qty++;
        return newState;
      }
    }
    // Find product by id the index, create new state and decrease the quantity at index
    case DECREASE_QTY_ITEM_CART: {
      let index = state.items.findIndex(function (element) {
        return element.id === action.item.id;
      });
      if (index === -1) {
        return state;
      } else {
        const newState = { ...state };
        if (newState.items[index].qty === 1) {
          return state;
        }
        newState.items[index].qty--;
        showNotification("Qty Decreased by 1");
        return newState;
      }
    }
    // Delete item from cart in case the product is delete from the DB
    // and Delete item from cart
    case DELETE_PRODUCT:
    case DELETE_ITEM_CART: {
      const filteredItems = state.items.filter(function (element) {
        return element.id !== action.item.id;
      });
      showNotification("Removed From Cart");
      return { ...state, items: filteredItems };
    }
    // Edit product and save
    case EDIT_PRODUCT: {
      let index = -1;
      const filteredItems = state.items.filter(function (element, i) {
        if (element.id === action.item.id) {
          index = i;
        }
        return element.id !== action.item.id;
      });
      if (index === -1) {
        return state;
      } else {
        action.item.qty = state.items[index].qty;
        filteredItems.splice(index, 0, action.item);
        return { ...state, items: filteredItems };
      }
    }
    default:
      return state;
  }
}

// Combine reducers
export default combineReducers({
  products,
  cart,
});
