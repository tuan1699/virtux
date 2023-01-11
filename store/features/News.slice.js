import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const PAGE_SIZE = 3;

const initialState = {
  data: [],
  loading: false,
  currentPage: 0,
};

export const fetchNews = createAsyncThunk("news.fetchNews", async () => {
  const res = await fetch("https://63bc2b36fa38d30d85be625b.mockapi.io/news");

  const data = await res.json();

  return data;
});

const NewsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.loading = true;
      })

      .addCase(fetchNews.fulfilled, (state, action) => {
        return {
          ...state,
          data: action.payload,
          loading: false,
          err: null,
        };
      });
  },
});

export default NewsSlice;

export const selectNewsList = (state) => {
  const total = state.news.data.length;

  const totalPage = Math.ceil(total / PAGE_SIZE);

  const newsByPage = state.news.data.slice(
    state.news.currentPage * PAGE_SIZE,
    (state.news.currentPage + 1) * PAGE_SIZE
  );

  return {
    news: newsByPage,
    currentPage: state.news.currentPage,
    totalPage,
    pageChanged,
  };
};
