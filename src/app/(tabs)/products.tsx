import { observer } from 'mobx-react';
import store from 'store';
import ListView from 'components/common/ListView';

const Products = () => {
  const products = store.products;

  return (
    <ListView type="products" data={products}></ListView>
  )
}

export default observer(Products);
