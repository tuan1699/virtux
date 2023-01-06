import { createSlice } from "@reduxjs/toolkit";

const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    search: "",
    categories: [],
    brand: [],
  },
  reducers: {
    categoriesFilterChange: (state, action) => {
      state.categories = action.payload;
    },

    brandFilterChange: (state, action) => {
      state.brand = action.payload;
    },
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default FilterSlice;
export const { categoriesFilterChange, brandFilterChange, searchFilterChange } =
  FilterSlice.actions;
