/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { ItemsList } from "../../ItemsList";

console.log(ItemsList);
const initialstate = {
  ItemsList: ItemsList,
  cart: {
    cartItems: [],
    amount: 0,
    total: 0,
  },
}

const itemsSlice = createSlice({
  name: 'items',
  initialState: initialstate,
  reducers: {
    addToCart: (state, { payload }) => {
      const existingItem = state.cart.cartItems.find((item) => item.id === payload.id);
      const ItemToadd = state.ItemsList.find((item) => item.id === payload.id);
      if (existingItem) {
        ItemToadd.quantity = ItemToadd.quantity +  1;
        existingItem.quantity += 1;
        console.log(existingItem.quantity);
      } else {
       
        ItemToadd.quantity = ItemToadd.quantity +  1;
        state.cart.cartItems.push(ItemToadd);
        console.log(state.cart.cartItems);
        console.log(initialstate)
      }
    },

    clearCart: (state) => {
      state.cart.cartItems.forEach((Cartitem) => {
        const ItemListItem  = state.ItemsList.find((item) => item.id == Cartitem.id)
        ItemListItem.quantity = 0
      })
      state.cart.cartItems = []
    },

    RemoveFromCart: (state, { payload }) => {
      console.log("removing from cart");

      const FilteredItems = state.cart.cartItems.filter((item) => item.id !== payload.id)
      const DecreaseItem = state.ItemsList.find((item) => item.id === payload.id);
      DecreaseItem.quantity = 0;
      state.cart.cartItems = FilteredItems
    },

    DecreaseQuantity: (state, { payload }) => {
      console.log("decreasing quantity");
      const itemToReduce = state.cart.cartItems.find((item) => item.id === payload.id);
      const DecreaseItem = state.ItemsList.find((item) => item.id === payload.id);
      if (itemToReduce && itemToReduce.quantity >= 1) {
        itemToReduce.quantity = itemToReduce.quantity - 1;
        DecreaseItem.quantity = DecreaseItem.quantity -1;
      }
    },
    calculateTotal: (state) => {
      let amount = 0
      let total = 0
      state.cart.cartItems.forEach((item) => {
        amount += item.quantity
        total += item.price * amount
      })
      state.cart.amount = amount;
      state.cart.total = parseFloat(total.toFixed(2));
    }
  }
}
)


export const { addToCart, DecreaseQuantity, RemoveFromCart, IncreaseAmt, calculateTotal, clearCart } = itemsSlice.actions;
console.log(itemsSlice)
export default itemsSlice.reducer;
