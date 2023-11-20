import { action } from "mobx";
import store from 'store'
import { withUUID } from "./helpers";

export const addProduct = action((newProduct: Omit<Product, 'id'>) => {
  store.products = [...store.products, withUUID(newProduct)]
});

export const addProductsList = action((newProductsList: Omit<ProductsList, 'id'>) => {
  store.productsLists = [...store.productsLists, withUUID(newProductsList)]
});

export const editProduct = action((editedProduct: Product) => {
  const oldProductIndex = store.products.findIndex((product) => product.id === store.selectedProduct?.id);
  store.products[oldProductIndex] = editedProduct;
  selectProduct(null);
});

export const editProductsList = action((editedProductsList: ProductsList) => {
  const oldProductsListIndex = store.productsLists.findIndex((productsList) => productsList.id === store.selectedProductsList?.id);
  store.productsLists[oldProductsListIndex] = editedProductsList;
  selectProductsList(null);
});

export const selectProduct = action((selectedProduct: Product | null) => {
  store.selectedProduct = selectedProduct;
});

export const selectProductsList = action((selectedProductsList: ProductsList | null) => {
  store.selectedProductsList = selectedProductsList;
});

export const removeProduct = action((productId?: string) => {
  if(!productId) {
    productId = store.selectedProduct?.id;
  }
  const removeIndex = store.products.findIndex((item => item.id === productId))
  store.products.splice(removeIndex, 1);
});

export const removeProductsList = action((productsListId?: string) => {
  if(!productsListId) {
    productsListId = store.selectedProductsList?.id;
  }
  const removeIndex = store.productsLists.findIndex((item => item.id === productsListId))
  store.productsLists.splice(removeIndex, 1);
});
