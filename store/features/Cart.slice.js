import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload: { productId, quantity } }) => {
      console.log("Added");
      // Giá trị payload mang theo mỗi lần addtoCart là {productId = 1, quantity = 1}

      // Tìm vị trí của product ở trong cart bằng id
      const itemIndex = state.findIndex((item) => item.productId === productId);

      // Nếu itemIndex khác -1 <=> item đã có trong giỏ hàng
      if (itemIndex !== -1) {
        const newItem = {
          ...state[itemIndex],
          quantity: state[itemIndex].quantity + quantity,
        };

        const newState = [...state];
        newState[itemIndex] = newItem;

        return newState;
      } else {
        return [...state, { productId, quantity }];
      }
    },

    incQty: (state, action) => {
      // Kiểm tra xem item đã có trong giỏ hàng hay chưa
      const itemIndex = state.findIndex(
        (item) => item.productId === action.payload
      );

      // itemIndex khác -1 <=> item đã có trong giỏ hàng, quantity được cộng thêm số lượng bằng số lượng quantity thay đổi
      if (itemIndex !== -1) {
        const newState = [...state];

        const newItem = {
          ...newState[itemIndex],
          quantity: newState[itemIndex].quantity + 1,
        };

        newState[itemIndex] = newItem;

        return newState;
      }
    },
    decQty: (state, action) => {
      const index = state.findIndex(
        (item) => item.productId === action.payload
      );

      if (index !== -1 && state[index].quantity > 1) {
        const newState = [...state];

        const newItem = { ...newState[index] };
        newItem.quantity -= 1;

        newState[index] = newItem;

        return newState;
      }
    },

    removeItem: (state, action) => {
      const newState = state.filter(
        (item) => item.productId !== action.payload
      );
      return newState;
    },
  },
});

export default CartSlice;

export const { addItem, incQty, decQty, removeItem } = CartSlice.actions;

export const selectCart = (state) => {
  const products = state.products.data;

  const cart = state.cart;

  const productsInCart = cart.map((item) => ({
    product: products.find((product) => product.id == item.productId),
    quantity: item.quantity,
  }));

  const totalPrice = productsInCart.reduce(
    (total, item) => (total += item.product.price * item.quantity),
    0
  );

  return {
    productsInCart,
    totalPrice,
    incQty,
    decQty,
    removeItem,
  };
};
