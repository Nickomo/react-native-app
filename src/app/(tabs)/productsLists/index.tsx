import { observer } from 'mobx-react';
import store from 'store';
import ListView from 'components/common/ListView';

const ProductsLists = () => {
  const productsLists = store.productsLists;

  return <ListView type="productsList" data={productsLists} />
}

export default observer(ProductsLists);