import { combineReducers } from "redux";
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
    case ADD_NEW_PRODUCT: {
      action.item.id = state.items.length + 1;
      showNotification("Product Added");
      return { ...state, items: [...state.items, action.item] };
    }
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

export function cart(state = initialCartState, action) {
  switch (action.type) {
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
    case DELETE_PRODUCT:
    case DELETE_ITEM_CART: {
      const filteredItems = state.items.filter(function (element) {
        return element.id !== action.item.id;
      });
      showNotification("Removed From Cart");
      return { ...state, items: filteredItems };
    }
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

export default combineReducers({
  products,
  cart,
});
