import { createStore, combineReducers } from "@reduxjs/toolkit";

// Cart Reducer
const initialCartState = [];
const cartReducer = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

// Auth Reducer
const initialAuthState = [];
const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return [...state, action.payload];
    case "SIGN_OUT":
      return [];
    default:
      return state;
  }
};

// User Reducer
const initialUserState = null;
const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "CLEAR_USER":
      return null;
    default:
      return state;
  }
};

// Action Creators
export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const clearUser = () => ({ type: "CLEAR_USER" });

// Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  user: userReducer, 
});

const store = createStore(rootReducer);

export default store;
