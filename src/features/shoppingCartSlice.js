import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onOpen: false,
  items: [],
  total: 0
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item, i) => i !== action.payload);
    },
    clearCart: (state) => { 
      state.items = state.items ? [] : state.items 
    },
    calculateTotal: (state) => {
      state.total = state.items.reduce((total, item) => total + item.price, 0);
    },
    toogleCart(state) {
      state.onOpen = !state.onOpen;
    },
    onOpenCart(state) {
      if (!state.onOpen) {
        state.onOpen = true;
      }
    },
    onCLoseCart(state) {
      state.onOpen = false;
    }
  },
});

export const {
  addToCart,
  removeFromCart,
  calculateTotal,
  onOpenCart,
  onCLoseCart,
  toogleCart,
  clearCart
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;