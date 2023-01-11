import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./features/Product.slice";
import FilterSlice from "./features/Filter.slice";
import AuthSlice from "./features/auth.slice";
import ReviewsSlice from "./review.slice";
import { ProductDetail } from "./features/detail.slice";
import NewsSlice from "./features/News.slice";

const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
    filter: FilterSlice.reducer,
    auth: AuthSlice.reducer,
    reviews: ReviewsSlice.reducer,
    productDetail: ProductDetail.reducer,
    news: NewsSlice.reducer,
  },
});

export default store;
