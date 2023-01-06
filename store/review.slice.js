import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReviews = createAsyncThunk(
  "reviews.fetchReviews",
  async () => {
    const res = await fetch(
      "https://63a8fbcd100b7737b987d5fd.mockapi.io/reviews"
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

const ReviewsSlice = createSlice({
  name: "reviews",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchReviews.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          loading: false,
          err: null,
        };
      });
  },
});

export default ReviewsSlice;
