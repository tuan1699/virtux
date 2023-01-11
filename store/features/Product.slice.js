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
  loading: false,
  err: null,
};

const ProductsSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = true;
      })

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

export default ProductsSlice;
