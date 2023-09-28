import { createSlice } from "@reduxjs/toolkit";

interface categoryType {
  category: string;
}

const categorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  } as categoryType,

  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
