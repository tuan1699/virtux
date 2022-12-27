import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const WishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addItemToWishList: (state, { payload: { productId } }) => {
      // Giá trị payload mang theo mỗi lần addtoCart là {productId = 1, quantity = 1}

      // Tìm vị trí của product ở trong cart bằng id
      const itemIndex = state.findIndex((item) => item.productId === productId);

      // Nếu itemIndex khác -1 <=> item đã có trong giỏ hàng
      if (itemIndex !== -1) {
        // const newItem = {
        //   ...state[itemIndex],
        //   quantity: state[itemIndex].quantity + quantity,
        // };

        // const newState = [...state];
        // newState[itemIndex] = newItem;

        // return newState;
        return [...state];
      } else {
        return [...state, { productId }];
      }
    },

    removeItemInWishList: (state, action) => {
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      return newState;
    },
  },
});

export default WishListSlice;

export const { addItemToWishList, removeItemInWishList } =
  WishListSlice.actions;

export const selectWishList = (state) => {
  const products = state.products.data;

  const wishList = state.wishList;

  const productsInWishList = wishList.map((item) =>
    products.find((product) => product.id == item.productId)
  );

  return {
    productsInWishList,
    removeItemInWishList,
  };
};
