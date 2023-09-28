import { configureStore } from "@reduxjs/toolkit";

// reudcers
import cartReducer from "./slices/CartSlice";
import categoryReducer from "./slices/CategorySlice";
import searchReducer from "./slices/SearchSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    category: categoryReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;

export default Store;

console.log(Store.getState().search);