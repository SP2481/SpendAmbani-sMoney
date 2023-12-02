import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./features/cart/ItemsSlice";

export const store = configureStore({
    reducer:{
        items:itemsReducer
    }
})
