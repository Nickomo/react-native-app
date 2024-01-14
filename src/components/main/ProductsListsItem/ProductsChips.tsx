import EmptyList from "components/common/ListView/EmptyList";
import { Stack, useLocalSearchParams } from "expo-router";
import { View, StyleSheet } from "react-native";
import { Chip, Text } from "react-native-elements";
import { observer } from 'mobx-react';
import store from "store";
import { removeProductID, removeProductsFromProductsList, removeSelectedProduct, selectProductID } from "store/actions";
import ConfirmationPopup from "components/common/ConfirmationPopup";
import { useState } from "react";
import { TabPlusIcon } from "app/(tabs)/_layout";

const InnerProductsList = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  // const productsList = store.selectedProductsList?.products;
  const productsList = store.products.filter(product => store.selectedProductsList?.products?.includes(product.id));
  const isProductsSelected = store.selectedProductsIDs.length;

  const showConfirmationPopup = () => setIsOverlayVisible(true);

  const onConfirm = () => {
    removeProductsFromProductsList()
  }

  const handleChipClick = (id: string, selected: boolean) => {
    selected ? removeProductID(id) : selectProductID(id)
  }

  if(!productsList?.length) {
    return <EmptyList />
  }
  return (
    <View style={styles.container}>
      {productsList.map(product => {
        const isSelected = store.selectedProductsIDs.includes(product.id)
        return (
          <Chip
            key={product.id}
            onPress={() => handleChipClick(product.id, isSelected)}
            title={product.name}
            buttonStyle={isSelected && styles.selected}
            containerStyle={styles.chipContainer}
          />
        )
      })}
      <Stack.Screen
        options={{
          title: "Products list",
          headerRight: () => {
            return isProductsSelected
              ? <Text onPress={showConfirmationPopup}>Remove</Text>
              : <TabPlusIcon link="/addProductsListProducts"/>
          }
        }} />
      <ConfirmationPopup isVisible={isOverlayVisible} onConfirm={onConfirm} closeOverlay={() => setIsOverlayVisible(false)}></ConfirmationPopup>
    </View>
  )
}

export default observer(InnerProductsList);

const styles = StyleSheet.create({
  container: {
    padding: 12,
    display: 'flex',
    gap: 12,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  selected: {
    backgroundColor: '#075ed9'
  },
  chipContainer: {
    width: '30%'
  }
});