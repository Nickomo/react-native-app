import { makeObservable, observable, action } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const defaultState: Store = {
  products: [],
  productsLists: [],
  selectedProduct: null,
  selectedProductsList: null,
}

const store = makeObservable(defaultState, {
  products: observable,
  productsLists: observable,
  selectedProduct: observable,
  selectedProductsList: observable,
});

// AsyncStorage.clear();

makePersistable(store, {
  name: 'ProductsListStore',
  properties: ['products', 'productsLists', 'selectedProduct', 'selectedProductsList'],
  storage: AsyncStorage
});

export default store;
