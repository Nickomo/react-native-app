import ListView from "components/common/ListView";
import { Stack, router } from "expo-router";
import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, SearchBar, Text } from "react-native-elements";
import store from "store";
import { addProductsToProductsList } from "store/actions";

const addProductsListProducts = () => {
  const [search, setSearch] = useState('');

  const onButtonPress = () => {
    addProductsToProductsList()
    router.back();
  }

  let products = store.products;
  if(search) {
    products = [...products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()))]
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{presentation: 'fullScreenModal'}}/>
      {/*@ts-ignore*/}
      <SearchBar value={search} placeholder="Search" round={true} lightTheme={true} onChangeText={setSearch}/>
      <ListView type="products" data={products} selectable={true}></ListView>
      <Button containerStyle={styles.button} title="Add Products" onPress={onButtonPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxHeight: '83%',
  },
  button: {
    padding: 'auto',
    marginTop: 12,
    paddingHorizontal: 24,
  },
});

export default addProductsListProducts;