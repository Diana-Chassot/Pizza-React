import { createSlice } from "@reduxjs/toolkit";
import { menuList } from "../helpers/menuList";


const initialState = {
  items: menuList,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updatePrice: (state, action) => {
      const { itemId, isChecked } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);

      if (itemToUpdate) {
        isChecked ? itemToUpdate.price += 3 : itemToUpdate.price = itemToUpdate.initialPrice;
      }
    },
  }
});
export const { updatePrice } = menuSlice.actions;
export default menuSlice.reducer;