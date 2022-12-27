import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./features/Product.slice";
import CartSlice from "./features/Cart.slice";
import WishListSlice from "./features/Wishlist.slice";
import FilterSlice from "./features/Filter.slice";

const store = configureStore({
  reducer: {
    products: ProductsSlice.reducer,
    cart: CartSlice.reducer,
    wishList: WishListSlice.reducer,
    filter: FilterSlice.reducer,
  },
});

export default store;
