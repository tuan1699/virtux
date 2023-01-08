export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);

import { createSelector } from "@reduxjs/toolkit";

export const selectAllProduct = (state) => state.products.data;
export const selectAllReview = (state) => state.reviews.data;
export const filterCategoriesSelector = (state) => state.filter.categories;
export const filterBrandSelector = (state) => state.filter.brand;
export const searchSelector = (state) => state.filter.search;
export const loaderReview = (state) => state.reviews.loading;
export const detailSelector = (state) => state.productDetail.data;

export const userSelector = (state) => state.auth.user;

export const productsRemainingSelector = createSelector(
  selectAllProduct,
  searchSelector,
  (products, search) => {
    if (search !== "") {
      return products.filter((product) => {
        return product.name.includes(search);
      });
    } else return [];
  }
);
