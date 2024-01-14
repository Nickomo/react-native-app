import ProductsChips from "components/main/ProductsListsItem/ProductsChips";
import { Stack } from "expo-router";
import { View } from "react-native";
import { TabPlusIcon } from "./(tabs)/_layout";
import { observer } from 'mobx-react';
import store from "store";

const ProductsChipsPage = () => {
  const length = store.selectedProductsIDs.length
  return (
    <View>
      <Stack.Screen options={{
        title: 'Products list',
        headerRight: () => <TabPlusIcon link="/addProductsListProducts"/>,
      }} />
      <ProductsChips />
    </View>
  )
}

export default observer(ProductsChipsPage);