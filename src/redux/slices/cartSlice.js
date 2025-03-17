import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = new Item
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      // payload = item id
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = item id
      const item = state.cart.find((item) => item.id === action.payload);
      item.quantity++;
      item.total = item.quantity * item.price;
    },
    decreaseItemQuantity(state, action) {
      // payload = item id
      const item = state.cart.find((item) => item.id === action.payload);
      if (item.quantity >= 2) {
        item.quantity--;
        item.total = item.quantity * item.price;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export default cartSlice.reducer;
