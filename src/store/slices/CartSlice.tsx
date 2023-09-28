import { createSlice } from "@reduxjs/toolkit";

// type of payload we are expecting
interface addToCartPayload {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// type for the cartItems in our cart
interface cartItems {
  cart: addToCartPayload[];
  amount: number;
  total: number;
}

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    amount: 0,
    total: 0,
  } as cartItems,

  reducers: {
    addToCart: (state, action: { payload: addToCartPayload }) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        state.cart = state.cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        state.cart = [...state.cart, action.payload];
      }
    },
    removeFromCart: (state, action: { payload: number }) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseInCart: (state, action: { payload: number }) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (selectedItem) selectedItem.quantity = selectedItem.quantity + 1;
    },
    decreaseInCart: (state, action: { payload: number }) => {
      const selectedItem = state.cart.find(
        (item) => item.id === action.payload
      );
      if (selectedItem?.quantity === 1) return;
      if (selectedItem) selectedItem.quantity = selectedItem.quantity - 1;
    },
  },
});

export const { addToCart, removeFromCart, increaseInCart, decreaseInCart } =
  CartSlice.actions;

export default CartSlice.reducer;
