import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products.fetchProducts",
  async () => {
    const res = await fetch(
      "https://63bc2b36fa38d30d85be625b.mockapi.io/products"
    );

    const data = await res.json();

    return data;
  }
);

const initialState = {
  data: [],
  currentPage: 1,
  filter: {
    search: "",
    sort: "",
    categories: [],
    brand: [],
    price: [0, 2000],
  },
  loading: false,
  err: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    pageChanged: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
      };
    },
    categoriesFilterChange: (state, action) => {
      state.filter.categories = action.payload;
      state.currentPage = 1;
    },

    brandFilterChange: (state, action) => {
      state.filter.brand = action.payload;
      state.currentPage = 1;
    },
    sortFilterChange: (state, action) => {
      state.filter.sort = action.payload;
      state.currentPage = 1;
    },
    priceFilterChange: (state, action) => {
      state.filter.price = action.payload;
      state.currentPage = 1;
    },
    searchFilterChange: (state, action) => {
      state.filter.search = action.payload;
    },
    clearFilter: (state, action) => {
      return {
        ...state,
        currentPage: 1,
        filter: {
          search: "",
          sort: "",
          categories: [],
          brand: [],
          price: [0, 2000],
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(fetchProducts.pending, (state, action) => {
      //   state.loading = true;
      // })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          loading: false,
          err: null,
        };
      });
  },
});

export const {
  categoriesFilterChange,
  brandFilterChange,
  searchFilterChange,
  pageChanged,
  sortFilterChange,
  priceFilterChange,
  clearFilter,
} = ProductsSlice.actions;

export default ProductsSlice;
