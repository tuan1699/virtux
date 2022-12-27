export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);

import { createSelector } from "@reduxjs/toolkit";

export const selectAllProduct = (state) => state.products.data;
export const filterCategoriesSelector = (state) => state.filter.categories;
export const filterBrandSelector = (state) => state.filter.brand;

export const productsRemainingSelector = createSelector(
  selectAllProduct,
  filterCategoriesSelector,
  filterBrandSelector,
  (products, categories, brand) => {
    return products.filter((product) => {
      if (categories.length !== 0 && brand.length !== 0) {
        return (
          product.categories.includes(categories) &&
          product.brand.includes(brand)
        );
      } else
        return categories.length !== 0
          ? product.categories.includes(categories)
          : brand.length !== 0
          ? product.brand.includes(brand)
          : product;
    });
  }
);
