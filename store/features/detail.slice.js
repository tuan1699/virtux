import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDetail = createAsyncThunk("product.detail", async (id) => {
  const res = await fetch(
    "https://63a8fbcd100b7737b987d5fd.mockapi.io/products/" + id
  );

  const data = await res.json();

  return data;
});

export const ProductDetail = createSlice({
  name: "productDetail",
  initialState: {
    data: {},
    loading: true,
    err: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      });
  },
});
