export const selectProductById = (productId) => (state) =>
  state.products.data.find((product) => product.id == productId);

import { createSelector } from "@reduxjs/toolkit";

export const selectAllProduct = (state) => state.products.data;
export const selectAllReview = (state) => state.reviews.data;
export const filterCategoriesSelector = (state) =>
  state.products.filter.categories;
export const filterBrandSelector = (state) => state.products.filter.brand;
export const searchSelector = (state) => state.products.filter.search;
export const sortSelector = (state) => state.products.filter.sort;
export const priceSelector = (state) => state.products.filter.price;
export const loaderReview = (state) => state.reviews.loading;
export const loaderDetail = (state) => state.productDetail.loading;
export const detailSelector = (state) => state.productDetail.data;
export const currentPageSelector = (state) => state.products.currentPage;

export const userSelector = (state) => state.auth.user;

export const productsSearched = createSelector(
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

export const productsRemaining = createSelector(
  selectAllProduct,
  filterCategoriesSelector,
  filterBrandSelector,
  sortSelector,
  priceSelector,
  currentPageSelector,
  (products, cate, brand, sort, price, currentPage) => {
    let filteredProducts = products.filter((product) => {
      if (cate.length !== 0 && brand.length !== 0)
        return (
          cate.includes(product.categories) && brand.includes(product.brand)
        );
      else if (cate.length !== 0) return cate.includes(product.categories);
      else if (brand.length !== 0) return brand.includes(product.brand);
      else return true;
    });

    if (sort !== "") {
      switch (sort) {
        case "AZ": {
          filteredProducts.sort((a, b) => {
            if (a.name >= b.name) return 1;
            else return -1;
          });
          break;
        }

        case "ZA": {
          filteredProducts.sort((a, b) => {
            if (a.name >= b.name) return -1;
            else return 1;
          });
          break;
        }

        case "highToLow": {
          filteredProducts.sort((a, b) => {
            if (a.price >= b.price) return -1;
            else return 1;
          });
          break;
        }

        case "lowToHigh": {
          filteredProducts.sort((a, b) => {
            if (a.price >= b.price) return 1;
            else return -1;
          });
          break;
        }
      }
    }

    if (price[0] !== 0 || price[1] !== 2000) {
      filteredProducts = filteredProducts.filter(
        (item) => item.price >= price[0] && item.price <= price[1]
      );
    }

    const total = filteredProducts.length;
    const totalPage = Math.ceil(total / 6);

    const productsByPage = filteredProducts.slice(
      (currentPage - 1) * 6,
      currentPage * 6
    );

    return {
      filteredProducts,
      products: productsByPage,
      currentPage,
      totalPage,
    };
  }
);
