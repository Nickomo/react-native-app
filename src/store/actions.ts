import { action } from "mobx";
import store from 'store'
import { withUUID } from "./helpers";

export const addProduct = action((newProduct: Product) => {
  store.products.push(withUUID(newProduct))
});

export const addProductsList = action((newProductsList: ProductsList) => {
  store.productsLists.push(withUUID(newProductsList))
});

export const selectProduct = action((selectedProduct: Product) => {
  store.selectedProduct = selectedProduct;
});

export const selectProductsList = action((selectedProductsList: ProductsList) => {
  store.selectedProductsList = selectedProductsList;
});
