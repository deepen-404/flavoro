import { createSlice } from "@reduxjs/toolkit";

interface searchType {
  search: string;
}

const searchSlice = createSlice({
  name: "search",
  initialState: {
    search: "",
  } as searchType,

  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
// console.log(searchSlice.getInitialState);
export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
